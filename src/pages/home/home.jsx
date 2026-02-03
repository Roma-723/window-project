import React from "react"
import { useTranslation } from "react-i18next"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { useNavigate } from "react-router-dom"
import img2 from "../../images/img2.png"
import img3 from "../../images/img3.png"
import img4 from "../../images/img4.png"
import img5 from "../../images/img5.png"
import img6 from "../../images/img6.png"
import img7 from "../../images/img7.png"
import akfa from "../../images/akfa.png"
import nurplast from "../../images/nurplast.png"
import alpro from "../../images/alpro.png"
import lega from "../../images/lega.png"
import "swiper/css"

const Home = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const slides = [
    { img: img2, title: t("slide.title1"), desc: t("slide.desc1") },
    { img: img3, title: t("slide.title2"), desc: t("slide.desc2") },
    { img: img4, title: t("slide.title3"), desc: t("slide.desc3") }
  ]

  const products = [
    { tag: t("products.new"), title: t("products.pvc"), price: "12 500 ₽", img: img5 },
    { title: t("products.aluminum"), price: "3 200 ₽", img: img6 },
    { tag: t("products.hit"), title: t("products.panoramic"), price: "1 850 ₽", img: img7 }
  ]

  return (
    <div className="w-full">
      <Swiper modules={[Autoplay]} autoplay={{ delay: 4000 }} loop>
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="h-[560px] bg-cover bg-center" style={{ backgroundImage: `url(${s.img})` }}>
              <div className="h-full bg-black/50 flex items-center px-10 text-white">
                <div>
                  <h1 className="text-5xl font-bold mb-4">{s.title}</h1>
                  <p className="mb-6">{s.desc}</p>
                  <button onClick={() => navigate("/product")} className="bg-yellow-500 px-8 py-3 rounded-full text-black">
                    {t("buttons.catalog")}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 px-6">
        <div className="text-center">
          <p className="text-5xl font-bold text-yellow-500">20+</p>
          <p>{t("stats.experience")}</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-yellow-500">3000+</p>
          <p>{t("stats.clients")}</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-yellow-500">100%</p>
          <p>{t("stats.quality")}</p>
        </div>
      </div>

      <h2 className="text-center text-3xl font-bold mt-24">{t("brands")}</h2>

      <div className="flex justify-center gap-10 mt-10">
        {[akfa, lega, nurplast, alpro].map((img, i) => (
          <img key={i} src={img} className="w-40 h-24 object-contain" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 px-6">
        {products.map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow">
            {p.tag && <span className="bg-yellow-500 px-3 py-1 rounded-full text-xs">{p.tag}</span>}
            <img src={p.img} className="h-48 mx-auto my-4" />
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-yellow-600 font-bold">{t("products.from")} {p.price}</p>
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/product")} className="block mx-auto my-24 border-2 border-yellow-500 px-10 py-4 rounded-xl text-yellow-600">
        {t("buttons.all_products")}
      </button>
    </div>
  )
}

export default Home
