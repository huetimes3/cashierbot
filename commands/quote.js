//quote.js
exports.run = (client, message) => {
  //checks to see if there's any quotes in the array
  if (client.config.quotes.length > 0) {
    //gets a random quote from the list of quotes in the config json
    let quote = client.config.quotes[Math.floor(Math.random() * client.config.quotes.length)];
    message.channel.send(quote);
    } 
  else {
    message.channel.send("There aren't any quotes!");
  }
};