"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Star, ShoppingCart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

interface BrowseCropsProps {
  onAddToCart: (items: any[]) => void
  cartItems: any[]
}

export default function BrowseCrops({ onAddToCart, cartItems }: BrowseCropsProps) {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const [searchTerm, setSearchTerm] = useState<string>("")
  const [selectedRegion, setSelectedRegion] = useState<string>("")
  const [selectedSeason, setSelectedSeason] = useState<string>("")
  const [priceRange, setPriceRange] = useState<string>("")

  const crops = [
    {
      id: 1,
      name: "Wheat",
      farmer: "Rajesh Kumar",
      price: "₹2,100/quintal",
      rating: 4.8,
      region: "Punjab",
      season: "Rabi",
      quantity: "500 quintals",
    },
    {
      id: 2,
      name: "Rice",
      farmer: "Priya Singh",
      price: "₹2,800/quintal",
      rating: 4.6,
      region: "West Bengal",
      season: "Kharif",
      quantity: "300 quintals",
    },
    {
      id: 3,
      name: "Cotton",
      farmer: "Amit Patel",
      price: "₹5,500/quintal",
      rating: 4.9,
      region: "Gujarat",
      season: "Kharif",
      quantity: "150 quintals",
    },
    {
      id: 4,
      name: "Maize",
      farmer: "Suresh Rao",
      price: "₹1,800/quintal",
      rating: 4.5,
      region: "Karnataka",
      season: "Kharif",
      quantity: "400 quintals",
    },
  ]

  const handleAddToCart = (crop: any) => {
    onAddToCart([...cartItems, crop])
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{t("browse.title")}</h2>

      {/* Search and Filters */}
      <Card className="p-6 border-0 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t("browse.searchCrop")}</label>
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder={t("browse.searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t("browse.region")}</label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">{t("browse.allRegions")}</option>
              <option value="punjab">{t("browse.punjab")}</option>
              <option value="westbengal">{t("browse.westBengal")}</option>
              <option value="gujarat">{t("browse.gujarat")}</option>
              <option value="karnataka">{t("browse.karnataka")}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t("browse.season")}</label>
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">{t("browse.allSeasons")}</option>
              <option value="kharif">{t("addCrop.kharif")}</option>
              <option value="rabi">{t("addCrop.rabi")}</option>
              <option value="summer">{t("addCrop.summer")}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t("browse.priceRange")}</label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">{t("browse.allPrices")}</option>
              <option value="low">{t("browse.under2000")}</option>
              <option value="medium">{t("browse.range2000to4000")}</option>
              <option value="high">{t("browse.above4000")}</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Crop Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.map((crop) => (
          <Card key={crop.id} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">{crop.name}</h3>
              <p className="text-sm text-gray-600">
                {t("browse.by")} {crop.farmer}
              </p>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">{t("browse.price")}</span>
                <span className="font-bold text-emerald-600">{crop.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t("browse.region")}</span>
                <span className="font-medium text-gray-900">{crop.region}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t("browse.season")}</span>
                <span className="font-medium text-gray-900">{crop.season}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t("browse.available")}</span>
                <span className="font-medium text-gray-900">{crop.quantity}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-medium text-gray-900">{crop.rating}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2">
                {t("browse.viewDetails")}
              </Button>
              <Button
                onClick={() => handleAddToCart(crop)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-2 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                {t("browse.add")}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
