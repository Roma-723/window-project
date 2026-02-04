import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { toggleWishlist } from "../../reducers/wishlistSlice/wishlistSlice"

const Wishlist = () => {
  const items = useSelector(state => state.wishlist.items)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-2">
          {t("wishlist.empty_title")}
        </h2>
        <p className="text-gray-500">
          {t("wishlist.empty_desc")}
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map(p => (
        <div key={p.id} className="relative bg-white rounded-3xl shadow p-6">
          <button
            onClick={() => dispatch(toggleWishlist(p))}
            className="absolute top-3 right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>

          <img src={p.img} className="h-40 mx-auto object-contain mb-4" />
          <h3 className="font-semibold">
            {typeof p.name === "object" ? p.name[i18n.language] : p.name}
          </h3>
          <p className="text-gray-500">{p.price} $</p>
        </div>
      ))}
    </div>
  )
}

export default Wishlist
