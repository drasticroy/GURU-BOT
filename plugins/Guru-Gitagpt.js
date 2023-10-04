import fetch from 'node-fetch';

let gitagptHandler = async (m, { text, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `Please provide some text or quote a message to get a response. Don't be a pussy.`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);
    const model = 'llama';
    const endpoint = `https://inrl-web.onrender.com/api/chatgpt?text=${prompt}`;

    const response = await fetch(endpoint);
    const data = await response.json();
    const result = data.result; // Extracting the "data" field

    m.reply(result);
  } catch (error) {
    console.error('Error:', error);
    throw `*ERROR*`;
  }
};
gitagptHandler.help = ['GITAGPT']
gitagptHandler.tags = ['AI']
gitagptHandler.command = ['gitagpt'];
gitagptHandler.diamond = false;

export default gitagptHandler;
