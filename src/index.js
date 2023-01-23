const TelegramBot = require("node-telegram-bot-api")
const { KeyboardContainer, keyboardRemove } = require("./options")

require("dotenv").config()

const bot = new TelegramBot(process.env.TOKEN, {
    polling: true
})

bot.setMyCommands([
    {command:"/start", description:"Начать работу"},
    {command:"/keyboard", description:"Запустить помощник"},
])


bot.on("message", async msg => {

const { id, first_name, username } = msg.chat


console.log(msg);
    switch (msg.text) {
        case "/start":
         await  bot.sendMessage(id, `Здравстуйте ${first_name}`, KeyboardContainer)
            break;
        case "/keyboard":
         await  bot.sendMessage(id, `Помощник открыт!`, KeyboardContainer)
            break;
        case "Закрыть":
            await bot.sendMessage(id, "Помощник закрыт!", keyboardRemove)
            break;
        default: 
            break;

    }


})
