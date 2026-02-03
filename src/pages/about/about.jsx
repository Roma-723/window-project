import React from "react"

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">
          О нас
        </h1>

        <p className="text-lg text-gray-600 text-center mb-12">
          Мы занимаемся производством и установкой окон и дверей.
          Более 20 лет опыта, тысячи довольных клиентов и гарантированное качество.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
            <p className="text-3xl font-bold text-yellow-500 mb-2">20+</p>
            <p className="text-gray-600">лет опыта</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
            <p className="text-3xl font-bold text-yellow-500 mb-2">3000+</p>
            <p className="text-gray-600">клиентов</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
            <p className="text-3xl font-bold text-yellow-500 mb-2">100%</p>
            <p className="text-gray-600"> 5  лет гарантия качества</p>
          </div>
        </div>

        <div className="mt-16 bg-yellow-500 rounded-3xl p-10 text-center text-black">
          <p className="text-xl font-semibold mb-2">
            Свяжитесь с нами
          </p>
          <p className="text-3xl font-bold">
            +992 500 000 759
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
