"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TrendingUp } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { useLanguage } from "@/lib/language-context"

export default function PricePrediction() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    cropType: "",
    region: "",
    season: "",
    quantity: "",
  })
  const [prediction, setPrediction] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePredict = async () => {
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setPrediction({
      predictedPrice: "₹2,450",
      confidence: "92%",
      trend: "Upward",
      historicalData: [
        { month: "Jan", historical: 2100, predicted: 2150 },
        { month: "Feb", historical: 2150, predicted: 2250 },
        { month: "Mar", historical: 2200, predicted: 2350 },
        { month: "Apr", historical: 2300, predicted: 2400 },
        { month: "May", historical: 2400, predicted: 2450 },
      ],
    })
    setLoading(false)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{t("prediction.title")}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Form */}
        <Card className="p-6 border-0 shadow-md lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("prediction.predictPrice")}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t("prediction.cropType")}</label>
              <select
                name="cropType"
                value={formData.cropType ?? ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">{t("prediction.selectCrop")}</option>
                <option value="wheat">{t("addCrop.wheat")}</option>
                <option value="rice">{t("addCrop.rice")}</option>
                <option value="cotton">{t("addCrop.cotton")}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t("prediction.region")}</label>
              <Input
                type="text"
                name="region"
                placeholder={t("prediction.regionPlaceholder")}
                value={formData.region ?? ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t("prediction.season")}</label>
              <select
                name="season"
                value={formData.season ?? ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">{t("prediction.selectSeason")}</option>
                <option value="kharif">{t("addCrop.kharif")}</option>
                <option value="rabi">{t("addCrop.rabi")}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t("prediction.quantity")}</label>
              <Input
                type="number"
                name="quantity"
                placeholder={t("prediction.quantityPlaceholder")}
                value={formData.quantity ?? ""}
                onChange={handleChange}
              />
            </div>

            <Button
              onClick={handlePredict}
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2"
            >
              {loading ? t("prediction.analyzing") : t("prediction.predictButton")}
            </Button>
          </div>
        </Card>

        {/* Prediction Results */}
        {prediction && (
          <Card className="p-6 border-0 shadow-md lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("prediction.results")}</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">{t("prediction.predictedPrice")}</p>
                <p className="text-2xl font-bold text-emerald-600">{prediction.predictedPrice}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">{t("prediction.confidence")}</p>
                <p className="text-2xl font-bold text-blue-600">{prediction.confidence}</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">{t("prediction.marketTrend")}</p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-amber-600" />
                  <p className="text-lg font-bold text-amber-600">{prediction.trend}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-gray-700 mb-4">{t("prediction.historicalVsPredicted")}</p>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={prediction.historicalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="historical" fill="#10b981" name={t("prediction.historical")} />
                  <Bar dataKey="predicted" fill="#3b82f6" name={t("prediction.predicted")} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
