  //guildMemberAdd.js

//looks out to see if a member joined
module.exports = (client,member) => {
  //set designated hello/goodbye channel, and role
  const channel = member.guild.channels.cache.find(ch => ch.name === client.config.welcomeChannel);
  let defaultRole = member.guild.roles.cache.find(r => r.name === client.config.defaultRole);
  
  //make it so this doesn't break on other servers yet (bandaid solution), closes this whole function on servers without front-doors
  if (!channel) return;
  
  //failed to fetch the members tag, look into whether or not we might need to have a database of users to keep track of
  channel.send(`<:chrislove:678932133250596904> Welcome **${member}**! Please read the information in <#598635885986316319> for rules, and post an intro in <#673512959665897472>!`);
  //add the role
  member.roles.add(defaultRole);
};
