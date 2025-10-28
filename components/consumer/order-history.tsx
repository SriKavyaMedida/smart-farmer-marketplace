"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Truck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export default function OrderHistory() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const orders = [
    {
      id: "ORD-001",
      date: "2024-10-15",
      crops: "Wheat (500 quintals)",
      total: "₹1,05,000",
      status: "Delivered",
      deliveryDate: "2024-10-20",
    },
    {
      id: "ORD-002",
      date: "2024-10-10",
      crops: "Rice (300 quintals)",
      total: "₹84,000",
      status: "In Transit",
      deliveryDate: "2024-10-25",
    },
    {
      id: "ORD-003",
      date: "2024-09-28",
      crops: "Cotton (150 quintals)",
      total: "₹82,500",
      status: "Delivered",
      deliveryDate: "2024-10-05",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="w-5 h-5 text-emerald-600" />
      case "In Transit":
        return <Truck className="w-5 h-5 text-blue-600" />
      default:
        return <Clock className="w-5 h-5 text-amber-600" />
    }
  }

  const getStatusTranslation = (status: string) => {
    switch (status) {
      case "Delivered":
        return t("orders.delivered")
      case "In Transit":
        return t("orders.inTransit")
      default:
        return t("orders.pending")
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{t("orders.title")}</h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{order.id}</h3>
                <p className="text-sm text-gray-600">{order.date}</p>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(order.status)}
                <Badge
                  variant={order.status === "Delivered" ? "default" : "secondary"}
                  className={
                    order.status === "Delivered"
                      ? "bg-emerald-600"
                      : order.status === "In Transit"
                        ? "bg-blue-600"
                        : "bg-amber-600"
                  }
                >
                  {getStatusTranslation(order.status)}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">{t("orders.crops")}</p>
                <p className="font-medium text-gray-900">{order.crops}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{t("orders.totalAmount")}</p>
                <p className="font-bold text-emerald-600">{order.total}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{t("orders.expectedDelivery")}</p>
                <p className="font-medium text-gray-900">{order.deliveryDate}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
