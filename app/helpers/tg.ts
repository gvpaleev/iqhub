import { Bot } from 'grammy'
import dotenv from 'dotenv'
dotenv.config()


class NitrificationIqHubBot {
  static instance: NitrificationIqHubBot | null = null;
  private bot: Bot | null = null;

  constructor() {
    if (NitrificationIqHubBot.instance) {
      return NitrificationIqHubBot.instance;
    }
    this.bot = new Bot('7608606133:AAGDKpKo4JBpt1Y9NodBD5Mx9HNpqMX8kFM');

    this.bot.on("message:text", (ctx) => {
      ctx.reply("Echo: " + ctx.message.text);
    });

    this.bot.start();

    NitrificationIqHubBot.instance = this;
  }

  sendMessage(message: string) {
    try {
      if (this.bot) {
        this.bot.api.sendMessage('1116850965', `Пользователь с сайта iqHub.online, заполнил форму: ${message}`); // Отправка сообщения в чат
        this.bot.api.sendMessage('300774281', `Пользователь с сайта iqHub.online, заполнил форму: ${message}`); // Отправка сообщения в чат
      }
    } catch (e) {
      console.log(e)
    }

  }
}

export function sendMessage(message: string) {
  (new NitrificationIqHubBot()).sendMessage(message);
}
