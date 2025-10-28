"use client"

import { Card } from "@/components/ui/card"
import { TrendingDown, Award, Zap } from "lucide-react"

export default function ConsumerRecommendations() {
  const recommendations = [
    {
      id: 1,
      title: "Best Value Wheat",
      description: "Rajesh Kumar's wheat is 8% cheaper than market average with 4.8★ rating.",
      icon: TrendingDown,
      color: "bg-emerald-50 border-emerald-200",
      textColor: "text-emerald-700",
    },
    {
      id: 2,
      title: "Top Rated Farmer",
      description: "Amit Patel has the highest rating (4.9★) and fastest response time (< 1 hour).",
      icon: Award,
      color: "bg-blue-50 border-blue-200",
      textColor: "text-blue-700",
    },
    {
      id: 3,
      title: "Seasonal Opportunity",
      description: "Rice prices are at their lowest this season. Stock up now for better value.",
      icon: Zap,
      color: "bg-amber-50 border-amber-200",
      textColor: "text-amber-700",
    },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Smart Suggestions</h3>
      <div className="space-y-3">
        {recommendations.map((rec) => {
          const Icon = rec.icon
          return (
            <Card key={rec.id} className={`p-4 border-2 ${rec.color} shadow-sm hover:shadow-md transition-shadow`}>
              <div className="flex gap-3">
                <div className={`flex-shrink-0 ${rec.textColor}`}>
                  <Icon className="w-5 h-5 mt-0.5" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold ${rec.textColor}`}>{rec.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
