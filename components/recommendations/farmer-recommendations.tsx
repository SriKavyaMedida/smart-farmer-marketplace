"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Lightbulb, Target } from "lucide-react"

export default function FarmerRecommendations() {
  const recommendations = [
    {
      id: 1,
      type: "market",
      title: "High Demand for Tomatoes",
      description:
        "Market analysis shows 35% increase in tomato demand for Kharif season. Your region has favorable conditions.",
      icon: TrendingUp,
      color: "bg-emerald-50 border-emerald-200",
      textColor: "text-emerald-700",
    },
    {
      id: 2,
      type: "pricing",
      title: "Optimal Selling Time",
      description: "Wheat prices are predicted to peak in 2 weeks. Consider harvesting and selling during this window.",
      icon: Target,
      color: "bg-blue-50 border-blue-200",
      textColor: "text-blue-700",
    },
    {
      id: 3,
      type: "pooling",
      title: "Join Cotton Pool",
      description:
        "A new cotton pooling group is forming with 8 farmers. Joining could increase your bargaining power by 40%.",
      icon: Lightbulb,
      color: "bg-amber-50 border-amber-200",
      textColor: "text-amber-700",
    },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">AI Recommendations</h3>
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
