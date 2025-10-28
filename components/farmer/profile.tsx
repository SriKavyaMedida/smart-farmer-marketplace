"use client"

import { Card } from "@/components/ui/card"
import { MapPin, Sprout, Smartphone, Mail } from "lucide-react"

export default function FarmerProfile() {
  const farmerData = {
    name: "Rajesh Kumar",
    farmSize: "45 acres",
    location: "Punjab, Ludhiana",
    crops: ["Wheat", "Rice", "Cotton"],
    phone: "+91 98765 43210",
    email: "rajesh@smartfarmer.com",
    joinDate: "Jan 2023",
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">My Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Full Name</p>
              <p className="text-lg font-medium text-gray-900">{farmerData.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <div className="flex items-center gap-2 text-gray-900">
                <Mail className="w-4 h-4 text-emerald-600" />
                <p className="text-lg font-medium">{farmerData.email}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <div className="flex items-center gap-2 text-gray-900">
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <p className="text-lg font-medium">{farmerData.phone}</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Farm Details</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Farm Size</p>
              <p className="text-lg font-medium text-gray-900">{farmerData.farmSize}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <div className="flex items-center gap-2 text-gray-900">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <p className="text-lg font-medium">{farmerData.location}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Member Since</p>
              <p className="text-lg font-medium text-gray-900">{farmerData.joinDate}</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 border-0 shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Crops Grown</h3>
        <div className="flex flex-wrap gap-3">
          {farmerData.crops.map((crop) => (
            <div key={crop} className="flex items-center gap-2 bg-emerald-100 text-emerald-900 px-4 py-2 rounded-full">
              <Sprout className="w-4 h-4" />
              <span className="font-medium">{crop}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
