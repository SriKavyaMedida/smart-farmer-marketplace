"use client"

import { Card } from "@/components/ui/card"
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export default function ConsumerAnalytics() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const orderByCrop = [
    { name: "Wheat", value: 45 },
    { name: "Rice", value: 30 },
    { name: "Cotton", value: 15 },
    { name: "Maize", value: 10 },
  ]

  const spendingBySeason = [
    { season: "Kharif", amount: 85000 },
    { season: "Rabi", amount: 92000 },
    { season: "Summer", amount: 45000 },
  ]

  const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{t("consumerAnalytics.title")}</h2>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-0 shadow-md">
          <p className="text-sm text-gray-600 mb-2">{t("consumerAnalytics.totalSpent")}</p>
          <p className="text-3xl font-bold text-emerald-600">₹2,22,000</p>
          <p className="text-xs text-gray-500 mt-2">{t("analytics.lastSixMonths")}</p>
        </Card>
        <Card className="p-6 border-0 shadow-md">
          <p className="text-sm text-gray-600 mb-2">{t("consumerAnalytics.totalOrders")}</p>
          <p className="text-3xl font-bold text-blue-600">24</p>
          <p className="text-xs text-gray-500 mt-2">{t("consumerAnalytics.completedOrders")}</p>
        </Card>
        <Card className="p-6 border-0 shadow-md">
          <p className="text-sm text-gray-600 mb-2">{t("consumerAnalytics.avgOrderValue")}</p>
          <p className="text-3xl font-bold text-amber-600">₹9,250</p>
          <p className="text-xs text-gray-500 mt-2">{t("consumerAnalytics.perTransaction")}</p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("consumerAnalytics.ordersByCrop")}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={orderByCrop}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {orderByCrop.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("consumerAnalytics.spendingBySeason")}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={spendingBySeason}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="season" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}
