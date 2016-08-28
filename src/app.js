'use strict';

require('dotenv').config();
const apiKey = process.env.TELEGRAM_API_KEY; 

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const tg = new Telegram.Telegram(apiKey);

class HelloController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    pingHandler($) {
        $.sendMessage('Hello yourself human');
    }

    get routes() {
        return {
            'hello': 'pingHandler'
        };
    }
}


console.log('Bot started!');


class OtherwiseController extends TelegramBaseController {
    handle() {console.log('otherwise');}
}
tg.router
    .when(['hello'], new HelloController())
    .otherwise(new OtherwiseController());


