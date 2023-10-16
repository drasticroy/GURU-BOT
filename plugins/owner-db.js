const handler = async (m) => {
  const totalreg = Object.keys(global.db.data.users).length;
  const rtotalreg = Object.values(global.db.data.users).filter((user) => user.msgs == true).length;
  m.reply(`*The number of database users is ${totalreg} users😊*`);
};
handler.help = ['databases', 'user'];
handler.tags = ['info'];
handler.command = /^(database|drasticdatabase|userdb)$/i;
handler.limit = true;

export default handler;
