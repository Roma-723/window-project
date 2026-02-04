// pages/cart/cart.jsx
import { useSelector, useDispatch } from "react-redux"
import { removeFromCart, clearCart, addToCart } from "../../reducers/cartSlice/cartSlice"
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Cart = () => {
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  const total = items.reduce((s, i) => s + i.price * Math.max(i.qty, 0), 0)

  if (!items.length) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold">{t("cart.empty")}</h2>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-white rounded-3xl shadow p-6">
        <div className="grid grid-cols-5 gap-4 font-semibold text-gray-500 border-b pb-4">
          <div className="col-span-2">{t("cart.product")}</div>
          <div>{t("cart.price")}</div>
          <div>{t("cart.qty")}</div>
          <div>{t("cart.subtotal")}</div>
        </div>

        {items.map(p => (
          <div key={p.id} className="grid grid-cols-5 gap-4 items-center py-6 border-b">
            <div className="col-span-2 flex items-center gap-4">
              <img src={p.img} className="w-16 h-16 object-contain" />
              <span className="font-medium">
                {typeof p.name === "object" ? p.name[i18n.language] : p.name}
              </span>
            </div>

            <div className="font-semibold">${p.price}</div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(addToCart({ ...p, qty: -1 }))}
                className="w-8 h-8 rounded-lg bg-yellow-200 flex items-center justify-center"
              >
                <MinusIcon className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-semibold">{p.qty}</span>
              <button
                onClick={() => dispatch(addToCart(p))}
                className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center"
              >
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between font-bold">
              ${p.price * p.qty}
              <button
                onClick={() => dispatch(removeFromCart(p.id))}
                className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center"
              >
                <XMarkIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mt-6">
          <Link to="/product" className="px-6 py-3 border rounded-xl font-semibold">
            {t("cart.back")}
          </Link>

          <button
            onClick={() => dispatch(clearCart())}
            className="px-6 py-3 border border-red-500 text-red-500 rounded-xl font-semibold"
          >
            {t("cart.clear")}
          </button>
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <div className="w-full md:w-96 bg-white rounded-3xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">{t("cart.total_title")}</h3>

          <div className="flex justify-between mb-2">
            <span>{t("cart.subtotal")}</span>
            <span>${total}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>{t("cart.shipping")}</span>
            <span className="text-green-600">{t("cart.free")}</span>
          </div>

          <div className="border-t pt-4 flex justify-between text-xl font-bold">
            <span>{t("cart.total")}</span>
            <span>${total}</span>
          </div>

          <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 py-4 rounded-2xl font-bold">
            {t("cart.checkout")}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
