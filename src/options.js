module.exports = {
    KeyboardContainer: {
        reply_markup: {
            keyboard: [
                [{text: "Получить сертификат"}],
                [{text: "?"}],
                [{text: "Закрыть"}],
            ]
        }
    },
    KeyboardAdmin: {
        reply_markup: {
            keyboard: [
                [{text: "Изменить сертификат"}],
                [{text: "Получить сертификат ученика"}],
                [{text: "Закрыть"}],
            ]
        }
    },
    keyboardRemove: {
        reply_markup: {
            remove_keyboard: true
        }
    }
}