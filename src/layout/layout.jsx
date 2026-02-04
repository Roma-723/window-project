import React, { useState } from "react"
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import logo from "../images/roma.png"
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import linkedin from "../images/linkedin.png"
import { HeartIcon } from "lucide-react"
import { useSelector } from "react-redux"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"

const Layout = () => {
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const count = useSelector(state => state.wishlist.items.length)
  const cartCount = useSelector(state => state.cart.items.reduce((s, i) => s + i.qty, 0))

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 w-full  bg-white  border-b border-gray-200">
        <div className="max-w-7xl bg-white mx-auto px-6 h-16 md:h-20 flex items-center gap-4">
          <img
            src={logo}
            onClick={() => navigate("/")}
            alt="logo"
            className="w-32 md:w-30 backdrop-blur h-auto object-contain cursor-pointer"
          />

          <nav className="ml-auto hidden md:flex items-center gap-2 text-sm font-semibold">
            {[
              { to: "/", label: t("menu.home") },
              { to: "/product", label: t("menu.products") },
              { to: "/about", label: t("menu.about") },
              { to: "/contact", label: t("menu.contact") }
            ].map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl transition ${
                    isActive
                      ? "bg-yellow-500 text-black"
                      : "text-gray-600 hover:text-black hover:bg-gray-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <select
              value={i18n.language}
              onChange={e => i18n.changeLanguage(e.target.value)}
              className="ml-4 px-3 py-2 rounded-xl border border-yellow-500 bg-yellow-400 text-black text-sm font-semibold"
            >
              <option value="ru">RU</option>
              <option value="en">EN</option>
              <option value="tj">TJ</option>
            </select>

            <Link
              to="/registration"
              className="ml-4 px-6 py-2.5 rounded-xl bg-yellow-500 text-black font-bold"
            >
              {t("menu.login")}
            </Link>

            <Link to="/wishlist" className="relative ml-4">
              <HeartIcon className="w-7 h-7 text-red-500" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative ml-4">
              <ShoppingCartIcon className="w-7 h-7 text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-500 text-black text-xs rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="ml-auto md:hidden text-2xl">
            ☰
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-2">
            {[
              { to: "/", label: t("menu.home") },
              { to: "/product", label: t("menu.products") },
              { to: "/about", label: t("menu.about") },
              { to: "/contact", label: t("menu.contact") }
            ].map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                {item.label}
              </NavLink>
            ))}

            <select
              value={i18n.language}
              onChange={e => {
                i18n.changeLanguage(e.target.value)
                setOpen(false)
              }}
              className="w-full mt-2 px-4 py-2 rounded-xl border border-gray-300"
            >
              <option value="ru">RU</option>
              <option value="en">EN</option>
              <option value="tj">TJ</option>
            </select>

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="block text-center mt-3 px-6 py-2.5 rounded-xl bg-yellow-500 font-bold"
            >
              {t("menu.login")}
            </Link>
          </div>
        )}
      </header>

      <Outlet />

      <footer className="bg-gray-100 text-gray-600 pt-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <img src={logo} className="w-32 mb-4 object-contain" />
            <p className="text-sm">{t("footer.desc")}</p>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm">
              <li>{t("footer.desc")}</li>
              <li>{t("footer.company")}</li>
              <li>{t("footer.contacts")}</li>
              <li>{t("footer.news")}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm">
              <li>{t("footer.pvc")}</li>
              <li>{t("footer.aluminum")}</li>
              <li>{t("footer.install")}</li>
              <li>{t("footer.consult")}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">{t("footer.contacts")}</h3>
            <p className="text-sm mb-2">info@roma.com</p>
            <p className="text-sm mb-4">+992 90 000 00 00</p>
            <div className="flex gap-3">
              <img src={instagram} className="w-9 h-9 cursor-pointer" />
              <img src={facebook} className="w-9 h-9" />
              <img src={linkedin} className="w-9 h-9" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
