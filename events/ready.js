//ready.js
module.exports = (client) => {
  client.user.setActivity(`for ` + client.config.prefix, { type: `WATCHING` });
  console.log(`Ready to serve on ${client.guilds.cache.size} servers, for ${client.users.cache.size} users!`);
};