'use strict';

const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


const apiKey = process.env.TELEGRAM_API_KEY;
const telegram = require('telegram-node-bot');
const bot = new telegram.Telegram(apiKey);

const TelegramBaseController = telegram.TelegramBaseController;

class HelloController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    helloHandler($) {
        $.sendMessage('Hello Yourself, human');
    }

    get routes() {
        return { 'hello': 'helloHandler' };
    }
}
/**
class OtherwiseController extends TelegramBaseController {
    handle() {
        console.log('otherwise');
    }
}
*/
bot.router
    .when(['hello'], new HelloController());
   // .otherwise(new OtherwiseController());



//bot.api.sendMessage('@test', '/hello');
//bot.api.sendMessage('@test', '/coucou');
console.log('Bot started!');
