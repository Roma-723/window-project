import React, { useEffect } from "react"
import img2 from "../../images/img2.png"
import img3 from "../../images/img3.png"
import img4 from "../../images/img4.png"
import akfa from "../../images/akfa.png"
import nurplast from "../../images/nurplast.png"
import alpro from "../../images/alpro.png"
import lega from "../../images/lega.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import { useNavigate, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { getUserProduct } from "../../api/productApi/productApi"
import { HeartIcon, EyeIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid"
import { addToCart } from "../../reducers/cartSlice/cartSlice"
import { toggleWishlist } from "../../reducers/wishlistSlice/wishlistSlice"

const Home = () => {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()

  const slides = [
    { img: img2, title: t("slide.title1"), desc: t("slide.desc1") },
    { img: img3, title: t("slide.title2"), desc: t("slide.desc2") },
    { img: img4, title: t("slide.title3"), desc: t("slide.desc3") },
  ]

  const { productData } = useSelector((state) => state.product)
  const wishlist = useSelector((state) => state.wishlist.items)

  useEffect(() => {
    dispatch(getUserProduct())
  }, [dispatch])

  return (
    <div className="w-full bg-gradient-to-b from-white via-gray-50 to-white text-gray-900">
      <div className="max-w-[1800px] mx-auto pt-16 px-4">
        <Swiper
          key={i18n.language}
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="h-[560px] rounded-[32px] overflow-hidden shadow-2xl"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${s.img})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                <div className="absolute left-6 md:left-24 top-1/2 -translate-y-1/2 text-white max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    {s.title}
                  </h1>
                  <p className="text-lg md:text-xl opacity-90 mb-10">
                    {s.desc}
                  </p>
                  <button
                    onClick={() => navigate("/product")}
                    className="px-12 py-4 rounded-full bg-yellow-500 text-black font-semibold tracking-wide hover:scale-110 hover:shadow-xl transition"
                  >
                    {t("buttons.catalog")}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 px-6">
        <div className="bg-white rounded-3xl p-10 text-center shadow-xl">
          <p className="text-5xl font-bold text-yellow-500 mb-3">20+</p>
          <p className="text-gray-600 text-lg">{t("stats.experience")}</p>
        </div>
        <div className="bg-white rounded-3xl p-10 text-center shadow-xl">
          <p className="text-5xl font-bold text-yellow-500 mb-3">3000+</p>
          <p className="text-gray-600 text-lg">{t("stats.clients")}</p>
        </div>
        <div className="bg-white rounded-3xl p-10 text-center shadow-xl">
          <p className="text-5xl font-bold text-yellow-500 mb-3">100%</p>
          <p className="text-gray-600 text-lg">{t("stats.quality")}</p>
        </div>
      </div>

      <div className="w-full mt-28 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-10">
            {t("brands")}
          </h2>
          <div className="flex justify-center gap-10">
            {[akfa, lega, nurplast, alpro].map((img, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 hover:scale-105 transition"
              >
                <img src={img} alt="" className="w-64 h-32 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-32 px-6">
        {productData?.slice(0, 3).map((p) => {
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
      <button
        onClick={() => navigate("/product")}
        className="block mx-auto my-24 px-14 py-5 rounded-2xl border-2 border-yellow-500 text-yellow-600 text-lg font-semibold hover:bg-yellow-500 hover:text-black hover:scale-105 transition"
      >
        {t("buttons.all_products")}
      </button>
    </div>
  )
}

export default Home
