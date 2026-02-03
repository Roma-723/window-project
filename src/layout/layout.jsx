import React, { useState } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next"
import logo from "../images/logo.png"
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import linkedin from "../images/linkedin.png"

const Layout = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center">
          <img src={logo} alt="logo" className="w-36 md:w-44 h-10 object-contain" />

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

            <Link
              to="/login"
              className="ml-4 px-6 py-2.5 rounded-xl bg-yellow-500 text-black font-bold"
            >
              {t("menu.login")}
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
            <h2 className="text-yellow-500 text-2xl font-bold mb-4">LUXE</h2>
            <p className="text-sm">{t("footer.desc")}</p>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm">
              <li>{t("footer.about")}</li>
              <li>{t("footer.history")}</li>
              <li>{t("footer.career")}</li>
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
            <p className="text-sm mb-2">info@luxe.com</p>
            <p className="text-sm mb-4">+992 90 000 00 00</p>
            <div className="flex gap-3">
              <img onClick={() => window.open("https://instagram.com/karimzoda.h7")} src={instagram} className="w-9 h-9 cursor-pointer" />
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
