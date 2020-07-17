//ping.js
exports.run = (client, message) => {
    message.channel.send({
        embed: {
            color: 11541580,
            fields: [{
                name: ":ping_pong:  pong!",
                value: "My ping was: " + Math.round(client.ws.ping) + ' ms'
            }
            ],
        }
    }
            ).catch(console.error);
}