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
    const endpoint = `https://gurugpt.cyclic.app/chat?prompt=${prompt}&model=${model}`;

    const response = await fetch(endpoint);
    const data = await response.json();
    const result = data.data; // Extracting the "data" field

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
