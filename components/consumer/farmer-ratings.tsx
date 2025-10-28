"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export default function FarmerRatings() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const [farmers, setFarmers] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 4.8,
      reviews: 156,
      crops: "Wheat, Rice",
      responseTime: "< 2 hours",
    },
    {
      id: 2,
      name: "Priya Singh",
      rating: 4.6,
      reviews: 98,
      crops: "Rice, Vegetables",
      responseTime: "< 4 hours",
    },
    {
      id: 3,
      name: "Amit Patel",
      rating: 4.9,
      reviews: 203,
      crops: "Cotton, Maize",
      responseTime: "< 1 hour",
    },
  ])

  const [selectedFarmer, setSelectedFarmer] = useState<any>(null)
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState<string>("")

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{t("ratings.title")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {farmers.map((farmer) => (
          <Card key={farmer.id} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{farmer.name}</h3>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(farmer.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-gray-900">{farmer.rating}</span>
                <span className="text-sm text-gray-600">
                  ({farmer.reviews} {t("ratings.rating")})
                </span>
              </div>

              <div>
                <p className="text-sm text-gray-600">{t("ratings.crops")}</p>
                <p className="font-medium text-gray-900">{farmer.crops}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">{t("ratings.responseTime")}</p>
                <p className="font-medium text-emerald-600">{farmer.responseTime}</p>
              </div>
            </div>

            <Button
              onClick={() => setSelectedFarmer(farmer)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2"
            >
              {t("ratings.leaveReview")}
            </Button>
          </Card>
        ))}
      </div>

      {/* Review Modal */}
      {selectedFarmer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md p-6 border-0">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t("ratings.rate")} {selectedFarmer.name}
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("ratings.rating")}</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} onClick={() => setRating(star)} className="focus:outline-none">
                      <Star
                        className={`w-8 h-8 ${
                          star <= rating ? "fill-amber-400 text-amber-400" : "text-gray-300 hover:text-amber-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("ratings.review")}</label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder={t("ratings.reviewPlaceholder")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 resize-none"
                  rows={4}
                />
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setSelectedFarmer(null)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 font-medium"
                >
                  {t("ratings.cancel")}
                </Button>
                <Button
                  onClick={() => {
                    setSelectedFarmer(null)
                    setRating(0)
                    setReview("")
                  }}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
                >
                  {t("ratings.submitReview")}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
