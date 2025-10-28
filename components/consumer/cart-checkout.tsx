"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

interface CartCheckoutProps {
  cartItems: any[]
}

export default function CartCheckout({ cartItems }: CartCheckoutProps) {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = Number.parseInt(item.price.replace(/[^\d]/g, ""))
      return total + price
    }, 0)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{t("cart.title")}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <Card className="p-12 border-0 shadow-md text-center">
              <p className="text-gray-600 text-lg">{t("cart.empty")}</p>
              <p className="text-gray-500 text-sm mt-2">{t("cart.addFromBrowse")}</p>
            </Card>
          ) : (
            cartItems.map((item, index) => (
              <Card key={index} className="p-6 border-0 shadow-md">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {t("browse.by")} {item.farmer}
                    </p>
                    <div className="mt-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{t("browse.price")}</span>
                        <span className="font-medium text-gray-900">{item.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{t("browse.region")}</span>
                        <span className="font-medium text-gray-900">{item.region}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Checkout Summary */}
        <Card className="p-6 border-0 shadow-md h-fit">
          <h3 className="text-lg font-bold text-gray-900 mb-4">{t("cart.orderSummary")}</h3>
          <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
            <div className="flex justify-between">
              <span className="text-gray-600">{t("cart.items")}</span>
              <span className="font-medium text-gray-900">{cartItems.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t("cart.subtotal")}</span>
              <span className="font-medium text-gray-900">₹{calculateTotal().toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t("cart.shipping")}</span>
              <span className="font-medium text-gray-900">₹500</span>
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <span className="font-bold text-gray-900">{t("cart.total")}</span>
            <span className="text-2xl font-bold text-emerald-600">₹{(calculateTotal() + 500).toLocaleString()}</span>
          </div>

          <Button
            disabled={cartItems.length === 0}
            className={`w-full font-medium py-3 ${
              cartItems.length === 0
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-700 text-white"
            }`}
          >
            {t("cart.proceedToPayment")}
          </Button>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">{t("cart.securePayment")}:</span> {t("cart.securePaymentText")}
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
