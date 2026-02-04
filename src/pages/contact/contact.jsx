import React from "react"
import axios from "axios"

const Contact = () => {
  const sendToTelegram = async (ev) => {
    ev.preventDefault()

    const data = {
      name: ev.target.name.value,
      phone: ev.target.phone.value,
      message: ev.target.message.value
    }

    const token = "8472046703:AAE5kamCVLRR2adl1o1PoIDkb73iHkLEgrg"
    const chatId = "5259325306"

    const text = `Имя: ${data.name}
Телефон: ${data.phone}
Сообщение: ${data.message}`

    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: chatId,
      text
    })

    ev.target.reset()
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-10">Контакты</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 shadow border">
              <p className="text-sm text-gray-500 mb-1">Телефон</p>
              <p className="text-xl font-semibold">+992 500 000 759</p>
              <p className="text-xl font-semibold">+992 93 88 38 070</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow border">
              <p className="text-sm text-gray-500 mb-1">Адрес</p>
              <p className="text-lg font-medium">г. Душанбе</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow border">
              <p className="text-sm text-gray-500 mb-1">Время работы</p>
              <p className="text-lg font-medium">Пн–Сб: 8:00–18:00</p>
            </div>
          </div>

          <form onSubmit={sendToTelegram} className="bg-gray-50 rounded-3xl p-8 shadow border">
            <h3 className="text-xl font-semibold mb-6">Оставить заявку</h3>

            <div className="space-y-4">
              <input name="name" type="text" placeholder="Имя" className="w-full h-12 rounded-xl px-4 border border-gray-300 outline-none" />
              <input name="phone" type="text" placeholder="Телефон" className="w-full h-12 rounded-xl px-4 border border-gray-300 outline-none" />
              <textarea name="message" placeholder="Сообщение" className="w-full h-32 rounded-xl px-4 py-3 border border-gray-300 outline-none resize-none" />
              <button type="submit" className="w-full py-3 rounded-xl bg-yellow-500 text-black font-semibold">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
