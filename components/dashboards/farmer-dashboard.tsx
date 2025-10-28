"use client"

import { useState } from "react"
import { Leaf, LogOut, BarChart3, Plus, Users, TrendingUp, Settings, Home } from "lucide-react"
import FarmerProfile from "@/components/farmer/profile"
import MyCrops from "@/components/farmer/my-crops"
import AddCropForm from "@/components/farmer/add-crop-form"
import PricePrediction from "@/components/farmer/price-prediction"
import CommunityPooling from "@/components/farmer/community-pooling"
import SalesAnalytics from "@/components/farmer/sales-analytics"
import FarmerDashboardHome from "@/components/farmer/dashboard-home"

interface FarmerDashboardProps {
  onLogout: () => void
  onSwitchRole: () => void
}

export default function FarmerDashboard({ onLogout, onSwitchRole }: FarmerDashboardProps) {
  const [activeSection, setActiveSection] = useState<string>("home")

  const navItems = [
    { id: "home", label: "Dashboard", icon: Home },
    { id: "profile", label: "Profile", icon: Leaf },
    { id: "crops", label: "My Crops", icon: BarChart3 },
    { id: "add-crop", label: "Add Crop", icon: Plus },
    { id: "price-prediction", label: "Price Prediction", icon: TrendingUp },
    { id: "pooling", label: "Community Pooling", icon: Users },
    { id: "analytics", label: "Sales Analytics", icon: BarChart3 },
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
          <p className="text-emerald-200 text-sm mt-2">Farmer Dashboard</p>
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
          {activeSection === "home" && <FarmerDashboardHome />}
          {activeSection === "profile" && <FarmerProfile />}
          {activeSection === "crops" && <MyCrops />}
          {activeSection === "add-crop" && <AddCropForm />}
          {activeSection === "price-prediction" && <PricePrediction />}
          {activeSection === "pooling" && <CommunityPooling />}
          {activeSection === "analytics" && <SalesAnalytics />}
        </div>
      </div>
    </div>
  )
}
