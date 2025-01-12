module.exports = {
    token: process.env.TOKEN,
    prefix: "?",
    mongoDB: process.env.MONGO_DB,
    apiUrl: "https://api.scripts-bot.cf",
    commandsDir: "./Src/Commands",
    eventsDir: "./Src/Events",
    devConfig: {
        enabled: false,
        owners: ["803491655515635763", "477649356191825920", "461756834353774592"],
        guild: '838824533036367872',
        debug: false
    },
    static: {
        emojis: {
            "success": "<:Success:839021779221086289>",
            "error": "<:Error:839021864033583144>",
            "info": "<:Info:839027748512989224>",
            "loading": "<a:loading:839462583740137472>"
        },
        color: {
            "success": "#43B581",
            "error": "#F04947",
            "info": "#7289DA",
            "loading": "#2F303A"
        }
    },
    status: {
        "status": "online",
        "activity": {
            "name": `@ScripTS help`,
            "type": "PLAYING"
        }
    }
}