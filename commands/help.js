//help.js
exports.run = (client, message, args) => {
  if (message.member.hasPermission(["ADMINISTRATOR"])) {
    message.channel.send({embed:  {
      "description": "Use `$help [command]` to get a better idea of what a command does! (feature to be added)...",
      "url": "https://discordapp.com",
      "color": 7343149,
      "timestamp": "2020-05-22T19:41:40.796Z",
      "footer": {
        "icon_url": "https://cdn.discordapp.com/avatars/686437471868682256/dad658ab61b20a7188b15148b9a3c676.png?size=1024",
        "text": "Thank you for shopping with us <3"
      },
      "thumbnail": {
        
      },
      "author": {
        "name": "Standard Commands List",
        "url": "https://discord.gg/VEhcavH",
        "icon_url": "https://cdn.discordapp.com/avatars/686437471868682256/dad658ab61b20a7188b15148b9a3c676.png?size=1024"
      },
      "fields": [
        {
          "name": ":information_source: Core Commands",
          "value": "`help` | `ping`",
          "inline": true
        },
        {
          "name": ":shopping_cart: Server Settings (Admins only)",
          "value": "`prefix`",
          "inline": true
        },
        {
          "name": ":birthday: Fun",
          "value": "`pyon` | `quote`",
          "inline": true
        }
      ]
    }
}).catch(console.error);
  } 
  else {
    message.channel.send({embed:  {
      "description": "Use `$help [command]` to get a better idea of what a command does! (feature to be added)...",
      "url": "https://discordapp.com",
      "color": 7343149,
      "timestamp": "2020-05-22T19:41:40.796Z",
      "footer": {
        "icon_url": "https://cdn.discordapp.com/avatars/686437471868682256/dad658ab61b20a7188b15148b9a3c676.png?size=1024",
        "text": "Thank you for shopping with us <3"
      },
      "thumbnail": {
        
      },
      "author": {
        "name": "Standard Commands List",
        "url": "https://discord.gg/VEhcavH",
        "icon_url": "https://cdn.discordapp.com/avatars/686437471868682256/dad658ab61b20a7188b15148b9a3c676.png?size=1024"
      },
      "fields": [
        {
          "name": ":information_source: Core Commands",
          "value": "`help` | `ping`",
          "inline": true
        },
        {
          "name": ":birthday: Fun",
          "value": "`pyon` | `quote`",
          "inline": true
        }
      ]
    }
}).catch(console.error);
  } 
}