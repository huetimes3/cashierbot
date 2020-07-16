//event files are now separate for ease of access B)
//message.js

module.exports = (client,message) => {  
  //ignores if there isn't a prefix or a bot uses the prefix
  if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;

  //cut out the prefix so only the content is seen
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, ignores it
  if (!cmd) {
    //message.channel.send(`I'm sorry, I didn't quite get that... check ${client.config.prefix}help for a list of all my commands`);
    return;
  };
  
  //VVVVV THIS SECTION HAS TO BE DELETED LATER IT IS A TEST TO CHECK IF I CAN MAKE THE BOT SEND MESSAGES TO SPECIFIC CHANNELS VVVVV
  if (command === "channeltest") {
    message.guild.channels.cache.find('name','backroom').send("test")
  }
  //^^^^^ THIS SECTION HAS TO BE DELETED LATER IT IS A TEST TO CHECK IF I CAN MAKE THE BOT SEND MESSAGES TO SPECIFIC CHANNELS ^^^^^

  // Run the command
  cmd.run(client, message, args);

};