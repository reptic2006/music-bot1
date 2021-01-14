exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'PURPLE',
            author: { name: 'Help pannel' },
            footer: { text: 'bot made by reptic#8575' },
            fields: [
                { name: 'Bot', value: '`ping`' },
                { name: 'Music', value: '`play`, `p`, `stop`, `s`, `disconnect`, `pause`, `queue`, `clear-queue`, `filters`, `resume`, `skip`, `sk`, `song`, `volume` ' },
                { name: 'Filters', value: '`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`' },
                { name: 'Commands', value: '`help`'}
            ],
            timestamp: new Date(),
            description: `To use filters, ${client.config.prefix}filter (the filter). Example : ${client.config.prefix}filter 8D.`,
        },
    });

};
