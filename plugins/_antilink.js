const linkRegexArray = [
  /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i, // WhatsApp group invite links
  /tiktok.com/i, // TikTok links
  /youtube.com|youtu.be/i, // YouTube links
  /t.me/i, // Telegram links
  /facebook.com|fb.me/i, // Facebook links
  /instagram.com/i, // Instagram links
  /http|https/i, // Generic HTTP/HTTPS links
];

export async function before(m, { conn, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe)
    return !0;
  if (!m.isGroup) return !1;
  let chat = global.db.data.chats[m.chat];
  let bot = global.db.data.settings[this.user.jid] || {};

  for (let i = 0; i < linkRegexArray.length; i++) {
    const linkRegex = linkRegexArray[i];
    const isLink = linkRegex.exec(m.text);

    if (isLink && !isAdmin) {
      if (isBotAdmin) {
        const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
        if (m.text.includes(linkThisGroup)) return !0;
      }
      await conn.reply(m.chat, "*≡ Link Detected*\nWe do not allow links in this group.", null, { mentions: [m.sender] });

      if (isBotAdmin && chat.antiLink) {
        await conn.sendMessage(m.chat, { delete: m.key });
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        return !0;
      } else if (!chat.antiLink) {
        return !0;
      }
    }
  }

  return !0;
}
