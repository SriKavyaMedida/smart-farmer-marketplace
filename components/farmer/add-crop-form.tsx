"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"

export default function AddCropForm() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    cropType: "",
    region: "",
    season: "",
    quantity: "",
    quality: "",
    basePrice: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Crop added:", formData)
    setFormData({ cropType: "", region: "", season: "", quantity: "", quality: "", basePrice: "" })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{t("addCrop.title")}</h2>

      <Card className="p-8 border-0 shadow-md max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t("addCrop.cropType")}</label>
              <select
                name="cropType"
                value={formData.cropType ?? ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="">{t("addCrop.selectCrop")}</option>
                <option value="wheat">{t("addCrop.wheat")}</option>
                <option value="rice">{t("addCrop.rice")}</option>
                <option value="cotton">{t("addCrop.cotton")}</option>
                <option value="maize">{t("addCrop.maize")}</option>
                <option value="sugarcane">{t("addCrop.sugarcane")}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t("addCrop.region")}</label>
              <Input
                type="text"
                name="region"
                placeholder={t("addCrop.regionPlaceholder")}
                value={formData.region ?? ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t("addCrop.season")}</label>
              <select
                name="season"
                value={formData.season ?? ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="">{t("addCrop.selectSeason")}</option>
                <option value="kharif">{t("addCrop.kharif")}</option>
                <option value="rabi">{t("addCrop.rabi")}</option>
                <option value="summer">{t("addCrop.summer")}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t("addCrop.quantity")}</label>
              <Input
                type="number"
                name="quantity"
                placeholder={t("addCrop.quantityPlaceholder")}
                value={formData.quantity ?? ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t("addCrop.quality")}</label>
              <select
                name="quality"
                value={formData.quality ?? ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="">{t("addCrop.selectQuality")}</option>
                <option value="premium">{t("addCrop.premium")}</option>
                <option value="standard">{t("addCrop.standard")}</option>
                <option value="economy">{t("addCrop.economy")}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t("addCrop.basePrice")}</label>
              <Input
                type="number"
                name="basePrice"
                placeholder={t("addCrop.basePricePlaceholder")}
                value={formData.basePrice ?? ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3">
            {t("addCrop.submitButton")}
          </Button>
        </form>
      </Card>
    </div>
  )
}
