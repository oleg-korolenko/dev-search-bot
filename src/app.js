'use strict';

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const tg = new Telegram.Telegram('181739768:AAGWDZOetZK5NAELIRn_VlJkVeFuoiOZ0xM');

class PingController extends TelegramBaseController {
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
    };
}

tg.router
    .when(['ping'], new PingController());