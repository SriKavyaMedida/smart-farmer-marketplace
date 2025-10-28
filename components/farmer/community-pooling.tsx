"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Plus } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function CommunityPooling() {
  const { t } = useLanguage()

  const [pools, setPools] = useState([
    {
      id: 1,
      cropType: "Wheat",
      totalMembers: 12,
      totalQuantity: "5000 quintals",
      fillPercentage: 85,
      status: "Active",
    },
    {
      id: 2,
      cropType: "Rice",
      totalMembers: 8,
      totalQuantity: "3000 quintals",
      fillPercentage: 60,
      status: "Active",
    },
    {
      id: 3,
      cropType: "Cotton",
      totalMembers: 15,
      totalQuantity: "2000 quintals",
      fillPercentage: 100,
      status: "Closed",
    },
  ])

  const [showCreateModal, setShowCreateModal] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">{t("pooling.title")}</h2>
        <Button
          onClick={() => setShowCreateModal(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          {t("pooling.createPool")}
        </Button>
      </div>

      <Card className="p-6 border-0 shadow-md bg-emerald-50">
        <h3 className="font-semibold text-gray-900 mb-2">{t("pooling.whatIs")}</h3>
        <p className="text-gray-700">{t("pooling.description")}</p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pools.map((pool) => (
          <Card key={pool.id} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {pool.cropType} {t("pooling.pool")}
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  pool.status === "Active" ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-800"
                }`}
              >
                {pool.status === "Active" ? t("pooling.active") : t("pooling.closed")}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>
                  {pool.totalMembers} {t("pooling.members")}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{t("pooling.totalQuantity")}</p>
                <p className="font-semibold text-gray-900">{pool.totalQuantity}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">{t("pooling.poolFillLevel")}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-600 h-2 rounded-full transition-all"
                    style={{ width: `${pool.fillPercentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  {pool.fillPercentage}% {t("pooling.full")}
                </p>
              </div>
            </div>

            <Button
              disabled={pool.status === "Closed"}
              className={`w-full font-medium py-2 ${
                pool.status === "Closed"
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white"
              }`}
            >
              {pool.status === "Closed" ? t("pooling.poolClosed") : t("pooling.joinPool")}
            </Button>
          </Card>
        ))}
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md p-6 border-0">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t("pooling.createNew")}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("pooling.cropType")}</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500">
                  <option>{t("pooling.selectCrop")}</option>
                  <option>{t("addCrop.wheat")}</option>
                  <option>{t("addCrop.rice")}</option>
                  <option>{t("addCrop.cotton")}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("pooling.targetQuantity")}</label>
                <input
                  type="number"
                  placeholder={t("pooling.targetPlaceholder")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 font-medium"
                >
                  {t("pooling.cancel")}
                </Button>
                <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
                  {t("pooling.create")}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
