// pages/product/getByIdProduct/getByIdProduct.jsx
import React, { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getUserProduct } from "../../../api/productApi/productApi"
import { useTranslation } from "react-i18next"

const GetByIdProduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const { productData } = useSelector(state => state.product)

  useEffect(() => {
    if (!productData.length) {
      dispatch(getUserProduct())
    }
  }, [dispatch, productData.length])

  const product = productData.find(p => String(p.id) === String(id))
  if (!product) return null

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-gray-100 rounded-3xl p-10 flex justify-center">
        <img src={product.img} className="h-80 object-contain" />
      </div>

      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-4">
          {product.name[i18n.language]}
        </h1>
        <p className="text-gray-500 mb-6">
          {product.description[i18n.language]}
        </p>
        <span className="text-3xl font-bold mb-6">{product.price} $</span>

        <div className="flex gap-4">
          <button className="w-64 bg-yellow-400 py-4 rounded-2xl font-semibold">
            {t("buttons.cart")}
          </button>

          <Link
            to="/cart"
            className="w-64 bg-black text-white py-4 rounded-2xl font-semibold text-center"
          >
            {t("buttons.go_to_cart")}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GetByIdProduct
