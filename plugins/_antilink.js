export async function before(m, { conn, isAdmin, isBotAdmin }) {
  // If the message is from Baileys or from the bot itself, ignore it.
  if (m.isBaileys && m.fromMe) {
    return true;
  }

  // If the message is not from a group, ignore it.
  if (!m.isGroup) {
    return false;
  }

  // Get the chat data.
  const chat = global.db.data.chats[m.chat];

  // Check if the antiLink feature is enabled.
  if (chat.antiLink) {
    // Check if the message contains any links.
    const isLink = /(?:https?:\/\/)?[^\s\/]+/i.exec(m.text);

    // If the user is not an admin and the message contains a link, take action.
    if (isLink && !isAdmin) {
      // Reply with a warning message.
      const warningMessage = `*≡ Link Detected*
      
We do not allow links in this group.`;
      await conn.reply(m.chat, warningMessage, null, { mentions: [m.sender] });

      // If the bot is an admin, delete the message and kick the user.
      if (isBotAdmin) {
        // Delete the message.
        await conn.sendMessage(m.chat, { delete: m.key });

        // Kick the user.
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }
    }
  }

  // If no links are detected or the user is an admin, return true.
  return true;
}
