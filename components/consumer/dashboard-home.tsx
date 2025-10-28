"use client"

import { Card } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import ConsumerRecommendations from "@/components/recommendations/consumer-recommendations"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { useLanguage } from "@/lib/language-context"

export default function ConsumerDashboardHome() {
  const { t } = useLanguage()

  const orderByCrop = [
    { name: "Wheat", value: 45 },
    { name: "Rice", value: 30 },
    { name: "Cotton", value: 15 },
    { name: "Maize", value: 10 },
  ]

  const recentOrders = [
    { id: "ORD-001", crop: "Wheat", amount: "₹1,05,000", status: "Delivered", date: "Oct 20" },
    { id: "ORD-002", crop: "Rice", amount: "₹84,000", status: "In Transit", date: "Oct 25" },
    { id: "ORD-003", crop: "Cotton", amount: "₹82,500", status: "Delivered", date: "Oct 5" },
  ]

  const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          {t("login.consumer")} {t("nav.dashboard")}
        </h2>
        <p className="text-gray-600 mt-1">{t("consumerAnalytics.title")}</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 border-0 shadow-md bg-gradient-to-br from-emerald-50 to-emerald-100">
          <p className="text-sm text-gray-600 mb-2">{t("consumerAnalytics.totalSpent")}</p>
          <p className="text-3xl font-bold text-emerald-600">₹2,22,000</p>
          <p className="text-xs text-emerald-600 mt-2">{t("analytics.lastSixMonths")}</p>
        </Card>
        <Card className="p-6 border-0 shadow-md bg-gradient-to-br from-blue-50 to-blue-100">
          <p className="text-sm text-gray-600 mb-2">{t("consumerAnalytics.totalOrders")}</p>
          <p className="text-3xl font-bold text-blue-600">24</p>
          <p className="text-xs text-blue-600 mt-2">{t("orders.delivered")}</p>
        </Card>
        <Card className="p-6 border-0 shadow-md bg-gradient-to-br from-amber-50 to-amber-100">
          <p className="text-sm text-gray-600 mb-2">{t("consumerAnalytics.avgOrderValue")}</p>
          <p className="text-3xl font-bold text-amber-600">₹9,250</p>
          <p className="text-xs text-amber-600 mt-2">{t("consumerAnalytics.perTransaction")}</p>
        </Card>
        <Card className="p-6 border-0 shadow-md bg-gradient-to-br from-purple-50 to-purple-100">
          <p className="text-sm text-gray-600 mb-2">{t("ratings.title")}</p>
          <p className="text-3xl font-bold text-purple-600">8</p>
          <p className="text-xs text-purple-600 mt-2">Saved</p>
        </Card>
      </div>

      {/* Charts and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("consumerAnalytics.ordersByCrop")}</h3>
          <ResponsiveContainer width="100%" height={250}>
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

        <ConsumerRecommendations />
      </div>

      {/* Recent Orders */}
      <Card className="p-6 border-0 shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("orders.title")}</h3>
        <div className="space-y-3">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-medium text-gray-900">{order.id}</p>
                  <p className="text-sm text-gray-600">{order.crop}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{order.amount}</p>
                <p
                  className={`text-xs font-medium ${order.status === "Delivered" ? "text-emerald-600" : "text-blue-600"}`}
                >
                  {order.status === "Delivered" ? t("orders.delivered") : t("orders.inTransit")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
