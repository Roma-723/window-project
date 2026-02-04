import React, { useState } from "react"

const Login = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async () => {
    if (!email || !password) return
    const res = await fetch(
      `http://localhost:3001/users?email=${encodeURIComponent(
        email
      )}&password=${encodeURIComponent(password)}`
    )
    const data = await res.json()
    if (data.length) {
      localStorage.setItem("user", JSON.stringify(data[0]))
      window.location.href = "/"
    } else {
      alert("Хатогӣ")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white w-[380px] p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Вход
        </h2>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Полное имя
          </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Электронная почта
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Пароль
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <button
          onClick={login}
          className="w-full h-11 rounded-xl bg-yellow-500 text-black font-bold transition-all duration-300 hover:bg-yellow-600 hover:scale-[1.02]"
        >
          Войти
        </button>
      </div>
    </div>
  )
}

export default Login
