import { promises } from 'fs';
import { join } from 'path';
import axios from 'axios'; 

let handler = async function (m, { conn, __dirname }) {
  const githubRepoURL = 'https://github.com/drasticroy/GURU-BOT';

  try {
  
    const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);

    if (response.status === 200) {
      const repoData = response.data;

      // Format the repository information with emojis
      const formattedInfo = `
📂 ʀᴇᴘᴏꜱɪᴛᴏʀʏ ɴᴀᴍᴇ: 𝕯𝖗𝖆𝖘𝖙𝖎𝖈 𝕽𝖊𝖈𝖔𝖉𝖊𝖉
⚠️ Donations are required for Script ⚠️
😒 ʏօʊ ƈǟռ ɖʍ ƈօɖɛʀ https://wa.me/+254740279985
📝 Description: Its better Than all before it
👨‍💻 𝙊𝙬𝙣𝙚𝙧: D̲r̲a̲s̲t̲i̲c̲ ̲R̲o̲y̲ 💀
👻 D̳o̳n̳t̳ ̳b̳e̳ ̳a̳ ̳P̳u̳s̳s̳ ̳C̳l̳a̳t̳
😎 https://recoderdrastic.is-a.dev
😒 νιѕιт му ραgє 😁 уσυ мιgнт gєт ѕ¢ тнєяє
📝 Description: More shit innit
      `.trim();

      // Send the formatted information as a message
      await conn.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: 600000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    } else {
      // Handle the case where the API request fails
      await conn.reply(m.chat, 'Unable to fetch repository information.', m);
    }
  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, 'An error occurred while fetching repository information.', m);
  }
};

handler.help = ['script'];
handler.tags = ['main'];
handler.command = ['sc', 'repo', 'script'];

export default handler;
