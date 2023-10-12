import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
import fetch from 'node-fetch';

import { generateSerpApiUrl } from '../lib/serpapi.js';

let handler = async (m, { command, usedPrefix, conn, text, args }) => {
  let [urutan] = args;
  let q = m.quoted || m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw 'The Media is not found 😒';
  let media = await q.download();
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  let link = await (isTele ? uploadImage : uploadFile)(media);
  await m.reply(wait);
  try {
    const param = {
      api_key: 'e3cdbff7d75ca5a40f0b75e97d6b28c53a50bbb0616f50c535ff85a1d031ded9',
      engine: 'google_lens',
      url: link,
    };
    
    let all = await generateSerpApiUrl(param);
    let data = all.visual_matches;
    if (!urutan) return m.reply("Input query!\n*Example:*\n.googlelens [number]\n\n*Choose the numbers that exist*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"));
    if (isNaN(urutan)) return m.reply("Input query!\n*Example:*\n.googlelens [number]\n\n*Choose the numbers that exist*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"));
    if (urutan > data.length) return m.reply("Input query!\n*Example:*\n.googlelens [number]\n\n*Choose the numbers that exist*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"));
    let out = data[urutan - 1];
    let caption = `🔍 *[ RESULTS 😁 ]*
📋 *Description:* ${out.title || 'There is none'}
📍 *Source:* ${out.source || 'There is none'}
⭐ *Link:* ${out.link || 'There is none'}
📝 *Thumbnail:* ${out.thumbnail || 'There is none'}`;

    await m.reply(caption);
     } catch (e) {
        conn.reply(m.chat, "Sorry, there was an error😢 Make sure you tagged an image", m)
        throw e
    }
};

handler.help = ["goolens *[there is a number]*"];
handler.tags = ["search"];
handler.command = /^(googlelens)$/i;
export default handler;
