const TelegramBot = require("node-telegram-bot-api")
const { KeyboardContainer, keyboardRemove, KeyboardAdmin } = require("./options")
const data = require("../date.json")
const { addName, addDate } = require("./certificateGenerator")
const fs = require("fs")

require("dotenv").config()

const bot = new TelegramBot(process.env.TOKEN, {
    polling: true
})

bot.setMyCommands([
    { command: "/start", description: "Начать работу" },
    { command: "/keyboard", description: "Запустить помощник" },
])

let admin = false
let user = false

bot.on("message", async msg => {

    const { id, first_name, username } = msg.chat


    switch (msg.text) {
        case "/start":
            await bot.sendMessage(id, `Здравстуйте ${first_name}`, username === "HeIIoW0RID" ? KeyboardAdmin : KeyboardContainer)
            admin = false
            break;
        case "/keyboard":
            await bot.sendMessage(id, `Помощник открыт!`, username === "HeIIoW0RID" ? KeyboardAdmin : KeyboardContainer)
            admin = false
            break;
        case "Закрыть":
            await bot.sendMessage(id, "Помощник закрыт!", keyboardRemove)
            admin = false
            break;
        case "Получить сертификат":
            certificate(data, id, username)
            admin = false
            break;
        case "Изменить сертификат":
            if (username === "HeIIoW0RID") {
                await bot.sendMessage(id, "Ваша следующая сообщение будет принят как изменение")
                admin = true
                // user = false 
            }
            break;
        case "Получить сертификат ученика":
            if (username === "HeIIoW0RID") {
                await bot.sendMessage(id, "Ведите username ученика")
                user = true
                admin = false
            }
            break;
        default:
            if(admin) {
                addDate(msg.text)
                admin = false
               await bot.sendMessage(id, "Идет загрузка сертификата...")
                setTimeout(() =>  {
                 bot.sendPhoto(id, __dirname +"/image/dataChange/data.png")
               },3000)
                setTimeout(() =>  {
                 bot.sendMessage(id," Успешно изменен")
               },4000)
               
            } else if(user) {
               certificate(data, id, msg.text)
               user = false
            }
            break;

    }

    async function certificate(data, chatId, username) {
        await data.users.map(el => {
            if (el.username === username) {
                addName(`${el.surname} ${el.name} ${el.patronymic}`, el.username)
                bot.sendMessage(chatId, "Загружаем сертификат...")
                setTimeout(() => {
                    bot.sendPhoto(chatId, `${__dirname}/image/certificate/${el.username}.png`)
                }, 3000)


            }
        })
    }

    

})
