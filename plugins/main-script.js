import { promises } from 'fs';
import { join } from 'path';
import axios from 'axios'; 

let handler = async function (m, { conn, __dirname }) {
  const githubRepoURL = 'https://github.com/drasticroy/';

  try {
  
    const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);

    if (response.status === 200) {
      const repoData = response.data;

      // Format the repository information with emojis
      const formattedInfo = `
📂 Repository Name: Drastic Recoded
⚠️ Donations are required for the Full Script ⚠️
😒 You can dm coder https://wa.me/+254740279985
📝 Description: Its better Than all before
👨‍💻 Owner: Drastic Roy 💀
👻 Dont be a Puss Clat
😎 https://recoderdrastic.is-a.dev
😒 Visit My page 😁 You Might get SC there
🌐 URL: ${repoData.html_url}
      `.trim();

      // Send the formatted information as a message
      await conn.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 69000,
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
    await conn.reply(m.chat, '📂 Repository Name: Drastic Recoded
⚠️ Donations are required for the Full Script ⚠️
😒 You can dm coder https://wa.me/+254740279985
📝 Description: Its better Than all before
👨‍💻 Owner: Drastic Roy 💀
👻 Dont be a Puss Clat
😎 https://recoderdrastic.is-a.dev
😒 Visit My page 😁 You Might get SC there', m);
  }
};

handler.help = ['script'];
handler.tags = ['main'];
handler.command = ['sc', 'repo', 'script'];

export default handler;
