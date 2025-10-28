"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react"
import FarmerRecommendations from "@/components/recommendations/farmer-recommendations"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function FarmerDashboardHome() {
  const recentSalesData = [
    { month: "Jan", sales: 12000 },
    { month: "Feb", sales: 15000 },
    { month: "Mar", sales: 18000 },
    { month: "Apr", sales: 22000 },
    { month: "May", sales: 25000 },
    { month: "Jun", sales: 28000 },
  ]

  const alerts = [
    { id: 1, type: "success", title: "Wheat Sold", message: "500 quintals sold at ₹2,100/quintal", icon: CheckCircle },
    {
      id: 2,
      type: "warning",
      title: "Price Alert",
      message: "Rice prices expected to rise 12% next week",
      icon: AlertCircle,
    },
    { id: 3, type: "info", title: "Pool Invitation", message: "Join the new cotton pooling group", icon: Clock },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Welcome back, Rajesh!</h2>
        <p className="text-gray-600 mt-1">Here's your farm performance overview</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 border-0 shadow-md bg-gradient-to-br from-emerald-50 to-emerald-100">
          <p className="text-sm text-gray-600 mb-2">Total Income</p>
          <p className="text-3xl font-bold text-emerald-600">₹2,22,000</p>
          <p className="text-xs text-emerald-600 mt-2 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +23% this month
          </p>
        </Card>
        <Card className="p-6 border-0 shadow-md bg-gradient-to-br from-blue-50 to-blue-100">
          <p className="text-sm text-gray-600 mb-2">Active Crops</p>
          <p className="text-3xl font-bold text-blue-600">3</p>
          <p className="text-xs text-blue-600 mt-2">Wheat, Rice, Cotton</p>
        </Card>
        <Card className="p-6 border-0 shadow-md bg-gradient-to-br from-amber-50 to-amber-100">
          <p className="text-sm text-gray-600 mb-2">Avg Price</p>
          <p className="text-3xl font-bold text-amber-600">₹3,467</p>
          <p className="text-xs text-amber-600 mt-2">Per quintal</p>
        </Card>
        <Card className="p-6 border-0 shadow-md bg-gradient-to-br from-purple-50 to-purple-100">
          <p className="text-sm text-gray-600 mb-2">Pool Members</p>
          <p className="text-3xl font-bold text-purple-600">35</p>
          <p className="text-xs text-purple-600 mt-2">Across 3 pools</p>
        </Card>
      </div>

      {/* Charts and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 border-0 shadow-md lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={recentSalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={2} dot={{ fill: "#10b981" }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <FarmerRecommendations />
      </div>

      {/* Recent Alerts */}
      <Card className="p-6 border-0 shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h3>
        <div className="space-y-3">
          {alerts.map((alert) => {
            const Icon = alert.icon
            const bgColor =
              alert.type === "success" ? "bg-emerald-50" : alert.type === "warning" ? "bg-amber-50" : "bg-blue-50"
            const textColor =
              alert.type === "success"
                ? "text-emerald-700"
                : alert.type === "warning"
                  ? "text-amber-700"
                  : "text-blue-700"
            return (
              <div key={alert.id} className={`flex gap-3 p-3 rounded-lg ${bgColor}`}>
                <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${textColor}`} />
                <div className="flex-1">
                  <p className={`font-medium ${textColor}`}>{alert.title}</p>
                  <p className="text-sm text-gray-600">{alert.message}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
