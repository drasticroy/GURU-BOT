import {
  proto,
  generateWAMessage,
  areJidsSameUser
} from '@whiskeysockets/baileys';

export async function all(m, chatUpdate) {
  // If the message is from Baileys, ignore it.
  if (m.isBaileys) return;

  // If the message does not have a file SHA-256 hash, ignore it.
  if (!m.msg.fileSha256) return;

  // Get the base64-encoded SHA-256 hash.
  const hash = Buffer.from(m.msg.fileSha256).toString('base64');

  // If the hash is not in the sticker database, ignore it.
  if (!(hash in global.db.data.sticker)) return;

  // Get the sticker data from the database.
  const stickerData = global.db.data.sticker[hash];

  // Create a new WhatsApp message object with the sticker text and mentions.
  const messages = await generateWAMessage(m.chat, {
    text: stickerData.text,
    mentions: stickerData.mentionedJid
  }, {
    userJid: this.user.id,
    quoted: m.quoted && m.quoted.fakeObj
  });

  // Set the message key to indicate that the message is from the bot.
  messages.key.fromMe = areJidsSameUser(m.sender, this.user.id);

  // Set the message ID to the same ID as the original message.
  messages.key.id = m.key.id;

  // Set the message push name to the same push name as the original message.
  messages.pushName = m.pushName;

  // If the message is in a group, set the message participant to the sender of the original message.
  if (m.isGroup) messages.participant = m.sender;

  // Create a new chat update message with the new WhatsApp message object.
  const msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
  };

  // Emit the 'messages.upsert' event with the new chat update message.
  this.ev.emit('messages.upsert', msg);
}
