//story.js
exports.run = (client, message, args) => {

    let storychan = client.channels.cache.get('712761909857747027');
    let num = parseInt(args[0], 10);
    let str = '';
    storychan.messages.fetch({ limit: num }).then(messages => {
        let arr = messages.array().reverse(); // you get the array of messages

        for (let i = 0; i < arr.length; i++) { // you loop through them
            let curr = arr[i];
            str += curr.content.trim() + ' ';
        };
        if (str.length > 2048) str = str.substring(0, 2045) + '...';
        // if the content is over the limit, you cut it
        message.channel.send(str);
    });
};