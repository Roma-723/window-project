import React, { useEffect } from "react"
import { HeartIcon, EyeIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { getUserProduct } from "../../api/productApi/productApi"
import { toggleWishlist } from "../../reducers/wishlistSlice/wishlistSlice"
import { Link, useNavigate } from "react-router-dom"
import { addToCart } from "../../reducers/cartSlice/cartSlice"

const Product = () => {
  const { productData } = useSelector(state => state.product)
  const wishlist = useSelector(state => state.wishlist.items)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getUserProduct())
  }, [dispatch])

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 py-10">
        <aside className="w-full lg:w-80 sticky top-6 h-fit bg-white rounded-3xl p-6 shadow-xl border border-gray-100 space-y-6">
          <input
            type="text"
            placeholder="Поиск"
            className="w-full h-12 rounded-xl px-4 border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-yellow-400 outline-none transition"
          />

          <div className="space-y-2">
            <h3 className="font-semibold">Бренд</h3>
            <select className="w-full h-12 rounded-xl px-4 bg-gray-50 border border-gray-200">
              <option>Akfa</option>
              <option>Lega</option>
              <option>Alpro</option>
              <option>Nurplast</option>
            </select>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Цвет</h3>
            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-full bg-white border shadow cursor-pointer hover:scale-110 transition"></span>
              <span className="w-7 h-7 rounded-full bg-amber-900 cursor-pointer hover:scale-110 transition"></span>
              <span className="w-7 h-7 rounded-full bg-gray-400 cursor-pointer hover:scale-110 transition"></span>
              <span className="w-7 h-7 rounded-full bg-black cursor-pointer hover:scale-110 transition"></span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Тип профиля</h3>
            <select className="w-full h-12 rounded-xl px-4 bg-gray-50 border border-gray-200">
              <option>Тёплый</option>
              <option>Холодный</option>
              <option>Фасадный</option>
            </select>
          </div>

          <div className="flex gap-3">
            <input type="text" placeholder="min" className="w-1/2 h-12 rounded-xl px-4 bg-gray-50 border border-gray-200" />
            <input type="text" placeholder="max" className="w-1/2 h-12 rounded-xl px-4 bg-gray-50 border border-gray-200" />
          </div>

          <button className="w-full h-12 rounded-2xl bg-yellow-400 hover:bg-yellow-500 active:scale-95 transition font-semibold">
            Применить
          </button>
        </aside>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-32 px-6">
          {productData?.map((p) => {
            const liked = wishlist.some((item) => item.id === p.id)
            return (
              <div
                key={p.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition group"
              >
                <div className="relative bg-gray-100 p-6 flex justify-center">
                  {p.discount && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      -{p.discount}%
                    </div>
                  )}

                  <img src={p.img} alt="" className="h-44 object-contain" />

                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button
                      onClick={() => dispatch(toggleWishlist(p))}
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow transition ${liked ? "bg-red-500" : "bg-white"
                        }`}
                    >
                      {liked ? (
                        <HeartSolid className="w-5 h-5 text-white" />
                      ) : (
                        <HeartIcon className="w-5 h-5 text-gray-400" />
                      )}
                    </button>

                    <Link
                      to={`/product/${p.id}`}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow"
                    >
                      <EyeIcon className="w-5 h-5 text-gray-700" />
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-2xl font-bold mb-1">{p.price} $</div>

                  <h3 className="font-semibold text-lg mb-2">
                    {p.name[i18n.language]}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4">
                    {p.description[i18n.language]}
                  </p>

                  <button
                    onClick={() => dispatch(addToCart(p))}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 transition"
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                    <span>{t("buttons.cart")}</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Product
