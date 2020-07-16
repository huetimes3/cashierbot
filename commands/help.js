//help.js
exports.run = (client, message, args) => {
  if (message.member.hasPermission(["ADMINISTRATOR"])) {
    message.channel.send({embed:  {
      "description": "Use `$help [command]` to get a better idea of what a command does! (feature to be added)...",
      "url": "https://discordapp.com",
      "color": 4732345,
      "timestamp": "2020-05-22T19:41:40.796Z",
      "footer": {
        "icon_url": "https://cdn.discordapp.com/avatars/686437471868682256/5405c6b616be88e27b57710eccca72bc.png?size=256",
        "text": "Thank you for shopping with us <3"
      },
      "thumbnail": {
        "url": "https://cdn.discordapp.com/embed/avatars/0.png"
      },
      "author": {
        "name": "Standard Commands List",
        "url": "https://discord.gg/VEhcavH",
        "icon_url": "https://cdn.discordapp.com/avatars/686437471868682256/5405c6b616be88e27b57710eccca72bc.png?size=256"
      },
      "fields": [
        {
          "name": ":information_source: Core Commands",
          "value": "`help` `ping`",
          "inline": true
        },
        {
          "name": ":shopping_cart: Server Settings (Admins only)",
          "value": "`prefix`",
          "inline": true
        },
        {
          "name": ":birthday: Fun",
          "value": "`pyon`",
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
      "color": 4732345,
      "timestamp": "2020-05-22T19:41:40.796Z",
      "footer": {
        "icon_url": "https://cdn.discordapp.com/avatars/686437471868682256/5405c6b616be88e27b57710eccca72bc.png?size=256",
        "text": "Thank you for shopping with us <3"
      },
      "thumbnail": {
        "url": "https://cdn.discordapp.com/embed/avatars/0.png"
      },
      "author": {
        "name": "Standard Commands List",
        "url": "https://discord.gg/VEhcavH",
        "icon_url": "https://cdn.discordapp.com/avatars/686437471868682256/5405c6b616be88e27b57710eccca72bc.png?size=256"
      },
      "fields": [
        {
          "name": ":information_source: Core Commands",
          "value": "`help` `ping`",
          "inline": true
        },
        {
          "name": ":birthday: Fun",
          "value": "`pyon`",
          "inline": true
        }
      ]
    }
}).catch(console.error);
  } 
}