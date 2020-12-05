from aiogram import Bot, Dispatcher, types, executor
import asyncio
import threading

TOKEN = '1345464047:AAEk2VNOYtRHOdbnXod7snWhx54UoWB_iZ4'

bot = Bot(token=TOKEN)
dp = Dispatcher(bot)


@dp.message_handler(commands='start')
async def cmd_start(message: types.Message):
    await message.reply(f"Привет! Твой chat_id = {message.chat.id}")


class Bot(threading.Thread):
    def run(self):
        asyncio.set_event_loop(asyncio.new_event_loop())
        executor.start_polling(dp, skip_updates=True)
