import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*This command generates images from text promprts*\n\n*𝙴xample usage*\n*◉ ${usedPrefix + command} Beautiful animegirl*\n*◉ ${usedPrefix + command} elon musk in pink outfit*`;

  try {
    m.reply('*Please wait, generating images...*');

   const endpoint = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    
    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*Image generation failed*';
    }
  } catch {
    throw '*Oops! Something went wrong while generating images. Please try again later.*';
  }
};

handler.help = ['dalle'];
handler.tags = ['AI'];
handler.command = ['dalle', 'gen', 'gimg', 'openai2'];
export default handler;
