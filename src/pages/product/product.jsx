import React from "react"
import img8 from "../../images/img8.png"
import img9 from "../../images/img9.png"
import img10 from "../../images/img10.png"
import img11 from "../../images/img11.png"
import { Eye, Heart } from "lucide-react"
const Product = () => {
  const items = [
    { img: img8, title: "Оконная система", price: "от 3 200 ₽" },
    { img: img8, title: "Оконная система", price: "от 3 200 ₽" },
    { img: img8, title: "Оконная система", price: "от 3 200 ₽" },
    { img: img8, title: "Оконная система", price: "от 3 200 ₽" },
    { img: img8, title: "Оконная система", price: "от 3 200 ₽" },
    { img: img9, title: "Оконная система", price: "от 3 500 ₽" },
    { img: img10, title: "Оконная система", price: "от 3 800 ₽" },
    { img: img11, title: "Оконная система", price: "от 4 100 ₽" },
    { img: img8, title: "Оконная система", price: "от 3 200 ₽" },
    { img: img9, title: "Оконная система", price: "от 3 500 ₽" }
  ]

  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 py-6 px-4 lg:px-6">

        <aside className="w-full lg:w-72 lg:h-135 bg-white rounded-2xl p-5 space-y-5 shadow-md border border-gray-200">
          <input
            type="text"
            placeholder="Поиск"
            className="w-full h-11 rounded-lg px-3 border border-gray-300 outline-none bg-[#fafafa]"
          />

          <h3 className="text-base font-semibold">Бренд</h3>
          <select className="w-full bg-[#fafafa] h-11 rounded-lg px-3 outline-none border border-gray-300">
            <option>Akfa</option>
            <option>Lega</option>
            <option>Alpro</option>
            <option>Nurplast</option>
          </select>

          <h3 className="text-base font-semibold">Цвет</h3>
          <div className="flex gap-3">
            <span className="w-6 h-6 rounded-full bg-white border cursor-pointer"></span>
            <span className="w-6 h-6 rounded-full bg-amber-900 cursor-pointer"></span>
            <span className="w-6 h-6 rounded-full bg-gray-400 cursor-pointer"></span>
            <span className="w-6 h-6 rounded-full bg-black cursor-pointer"></span>
          </div>

          <h3 className="text-base font-semibold">Тип профиля</h3>
          <select className="w-full bg-[#fafafa] h-11 rounded-lg px-3 outline-none border border-gray-300">
            <option>Тёплый</option>
            <option>Холодный</option>
            <option>Фасадный</option>
          </select>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="min-price"
              className="w-1/2 h-11 rounded-lg px-3 border border-gray-300 outline-none bg-[#fafafa]"
            />
            <input
              type="text"
              placeholder="max-price"
              className="w-1/2 h-11 rounded-lg px-3 border border-gray-300 outline-none bg-[#fafafa]"
            />
          </div>

          <button className="w-full py-3 rounded-xl bg-yellow-500 text-black font-semibold">
            Применить
          </button>
        </aside>


        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 shadow border hover:-translate-y-1 transition"
            >
              <div className="relative h-44 rounded-xl mb-4 flex items-center justify-center bg-[#fafafa]">
                <img src={p.img} alt="" className="h-full object-contain" />
                <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-400 hover:text-red-500 transition">
                  <Heart size={18} /></button>
                <button className="absolute top-15 right-3 w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-400 hover:text-red-500 transition">
                  <Eye size={18} /></button>

              </div>

              <h4 className="text-base font-semibold mb-1">{p.title}</h4>
              <p className="text-sm text-gray-500 mb-3">Качественный профиль</p>

              <div className="flex justify-between items-center">
                <span className="text-yellow-600 font-bold">{p.price}</span>
                <button className="px-4 py-2 rounded-lg bg-[#ffd24d] text-black font-semibold hover:bg-[#f5c400] transition">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

export default Product
