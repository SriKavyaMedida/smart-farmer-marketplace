"use client"

import { useState } from "react"
import { Leaf, LogOut, ShoppingCart, History, Star, BarChart3, Settings, Home } from "lucide-react"
import BrowseCrops from "@/components/consumer/browse-crops"
import CartCheckout from "@/components/consumer/cart-checkout"
import OrderHistory from "@/components/consumer/order-history"
import FarmerRatings from "@/components/consumer/farmer-ratings"
import ConsumerAnalytics from "@/components/consumer/consumer-analytics"
import ConsumerDashboardHome from "@/components/consumer/dashboard-home"

interface ConsumerDashboardProps {
  onLogout: () => void
  onSwitchRole: () => void
}

export default function ConsumerDashboard({ onLogout, onSwitchRole }: ConsumerDashboardProps) {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [cartItems, setCartItems] = useState<any[]>([])

  const navItems = [
    { id: "home", label: "Dashboard", icon: Home },
    { id: "browse", label: "Browse Crops", icon: ShoppingCart },
    { id: "cart", label: "Cart & Checkout", icon: ShoppingCart },
    { id: "history", label: "Order History", icon: History },
    { id: "ratings", label: "Farmer Ratings", icon: Star },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-emerald-900 text-white shadow-lg flex flex-col">
        <div className="p-6 border-b border-emerald-800">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8" />
            <h1 className="text-xl font-bold">Smart Farmer</h1>
          </div>
          <p className="text-emerald-200 text-sm mt-2">Consumer Dashboard</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeSection === item.id ? "bg-emerald-600 text-white" : "text-emerald-100 hover:bg-emerald-800"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="p-4 border-t border-emerald-800 space-y-2">
          <button
            onClick={onSwitchRole}
            className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-emerald-100 hover:bg-emerald-800 transition-all"
          >
            <Settings className="w-5 h-5" />
            <span className="text-sm">Switch Role</span>
          </button>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-emerald-100 hover:bg-red-600 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {activeSection === "home" && <ConsumerDashboardHome />}
          {activeSection === "browse" && <BrowseCrops onAddToCart={setCartItems} cartItems={cartItems} />}
          {activeSection === "cart" && <CartCheckout cartItems={cartItems} />}
          {activeSection === "history" && <OrderHistory />}
          {activeSection === "ratings" && <FarmerRatings />}
          {activeSection === "analytics" && <ConsumerAnalytics />}
        </div>
      </div>
    </div>
  )
}
