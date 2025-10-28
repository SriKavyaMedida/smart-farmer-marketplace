"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"

export default function MyCrops() {
  const { t } = useLanguage()

  const crops = [
    {
      id: 1,
      name: "Wheat",
      quantity: "500 quintals",
      price: "₹2,100/quintal",
      quality: "Premium",
      season: "Rabi",
      status: "Active",
    },
    {
      id: 2,
      name: "Rice",
      quantity: "300 quintals",
      price: "₹2,800/quintal",
      quality: "Standard",
      season: "Kharif",
      status: "Active",
    },
    {
      id: 3,
      name: "Cotton",
      quantity: "150 quintals",
      price: "₹5,500/quintal",
      quality: "Premium",
      season: "Kharif",
      status: "Sold Out",
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{t("crops.title")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.map((crop) => (
          <Card key={crop.id} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">{crop.name}</h3>
              <Badge
                variant={crop.status === "Active" ? "default" : "secondary"}
                className={crop.status === "Active" ? "bg-emerald-600" : "bg-gray-400"}
              >
                {crop.status === "Active" ? t("crops.active") : t("crops.soldOut")}
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">{t("crops.quantity")}</span>
                <span className="font-semibold text-gray-900">{crop.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t("crops.price")}</span>
                <span className="font-semibold text-emerald-600">{crop.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t("crops.quality")}</span>
                <span className="font-semibold text-gray-900">{crop.quality}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t("crops.season")}</span>
                <span className="font-semibold text-gray-900">{crop.season}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
              <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-medium transition-colors">
                {t("crops.edit")}
              </button>
              <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 py-2 rounded-lg font-medium transition-colors">
                {t("crops.delete")}
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
