"use client"

import { Card } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { useLanguage } from "@/lib/language-context"

export default function SalesAnalytics() {
  const { t } = useLanguage()

  const cropWiseSales = [
    { name: t("addCrop.wheat"), sales: 45000 },
    { name: t("addCrop.rice"), sales: 38000 },
    { name: t("addCrop.cotton"), sales: 52000 },
  ]

  const seasonalPerformance = [
    { season: t("addCrop.kharif"), income: 85000 },
    { season: t("addCrop.rabi"), income: 92000 },
    { season: t("addCrop.summer"), income: 45000 },
  ]

  const monthlyTrend = [
    { month: "Jan", sales: 12000 },
    { month: "Feb", sales: 15000 },
    { month: "Mar", sales: 18000 },
    { month: "Apr", sales: 22000 },
    { month: "May", sales: 25000 },
    { month: "Jun", sales: 28000 },
  ]

  const COLORS = ["#10b981", "#3b82f6", "#f59e0b"]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{t("analytics.title")}</h2>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-0 shadow-md">
          <p className="text-sm text-gray-600 mb-2">{t("analytics.totalIncome")}</p>
          <p className="text-3xl font-bold text-emerald-600">₹2,22,000</p>
          <p className="text-xs text-gray-500 mt-2">{t("analytics.lastSixMonths")}</p>
        </Card>
        <Card className="p-6 border-0 shadow-md">
          <p className="text-sm text-gray-600 mb-2">{t("analytics.averageSale")}</p>
          <p className="text-3xl font-bold text-blue-600">₹37,000</p>
          <p className="text-xs text-gray-500 mt-2">{t("analytics.perTransaction")}</p>
        </Card>
        <Card className="p-6 border-0 shadow-md">
          <p className="text-sm text-gray-600 mb-2">{t("analytics.growthTrend")}</p>
          <p className="text-3xl font-bold text-amber-600">+23%</p>
          <p className="text-xs text-gray-500 mt-2">{t("analytics.monthOverMonth")}</p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("analytics.cropWiseIncome")}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cropWiseSales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("analytics.seasonalPerformance")}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={seasonalPerformance}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ₹${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="income"
              >
                {seasonalPerformance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6 border-0 shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("analytics.monthlySalesTrend")}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={2} dot={{ fill: "#10b981" }} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Recommendations */}
      <Card className="p-6 border-0 shadow-md bg-emerald-50">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("analytics.aiRecommendations")}</h3>
        <p className="text-gray-700">{t("analytics.recommendationText")}</p>
      </Card>
    </div>
  )
}
