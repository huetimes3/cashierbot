//prefix.js
exports.run = (client,message,args) => {
  if (message.member.hasPermission(["ADMINISTRATOR"])) {
    //makes new prefix the first thing that came after command, ignoring anything after spaces
    let newPrefix = args[0];
    client.config.prefix = newPrefix;
    message.channel.send(`Prefix changed to ${newPrefix}`);
    } 
  else {
    message.channel.send("You don't have permission to do that!");
  }
};