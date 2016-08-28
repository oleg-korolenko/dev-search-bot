'use strict';

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const tg = new Telegram.Telegram('181739768:AAGWDZOetZK5NAELIRn_VlJkVeFuoiOZ0xM');

class HelloController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    pingHandler($) {
        $.sendMessage('pong');
    }

    get routes() {
        return {
            'hello': 'pingHandler'
        };
    }
}


class OtherwiseController extends TelegramBaseController {
    handle() {console.log('otherwise');}
}
tg.router
    .when(['hello'], new HelloController())
    .otherwise(new OtherwiseController());