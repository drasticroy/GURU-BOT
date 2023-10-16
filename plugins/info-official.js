const handler = async (m, {conn, command}) => {
  const str = `
💜 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙏𝙃𝙀 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘼𝘾𝘾𝙊𝙐𝙉𝙏𝙎 👻
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *GITHUB*
https://github.com/drasticroy
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *INSTAGRAM*
https://www.instagram.com/drastic_roy
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *WHATSAPP*
https://wa.me/+254740279985
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *TIKTOK*
https://www.tiktok.com/@drastic_roy
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*If you have doubts, suggestions or questions just write to https://wa.me/+254740279985.*
`.trim();

  conn.sendHydrated(m.chat, str, 'https://github.com/', '𝘽𝙤𝙩-𝙈𝘿', null, null, [
    ['x'],
    ['c'],
    ['v'],
  ], m);
};

handler.tags = ['info'];
handler.command = /^acc$/i;
export default handler;
