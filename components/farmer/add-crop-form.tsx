"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AddCropForm() {
  const [formData, setFormData] = useState({
    cropType: "",
    region: "",
    season: "",
    quantity: "",
    quality: "",
    basePrice: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Crop added:", formData)
    setFormData({ cropType: "", region: "", season: "", quantity: "", quality: "", basePrice: "" })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Add New Crop</h2>

      <Card className="p-8 border-0 shadow-md max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Crop Type</label>
              <select
                name="cropType"
                value={formData.cropType ?? ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="">Select crop type</option>
                <option value="wheat">Wheat</option>
                <option value="rice">Rice</option>
                <option value="cotton">Cotton</option>
                <option value="maize">Maize</option>
                <option value="sugarcane">Sugarcane</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <Input
                type="text"
                name="region"
                placeholder="e.g., Punjab, Haryana"
                value={formData.region ?? ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Season</label>
              <select
                name="season"
                value={formData.season ?? ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="">Select season</option>
                <option value="kharif">Kharif</option>
                <option value="rabi">Rabi</option>
                <option value="summer">Summer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity (quintals)</label>
              <Input
                type="number"
                name="quantity"
                placeholder="e.g., 500"
                value={formData.quantity ?? ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quality</label>
              <select
                name="quality"
                value={formData.quality ?? ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="">Select quality</option>
                <option value="premium">Premium</option>
                <option value="standard">Standard</option>
                <option value="economy">Economy</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Base Price (per quintal)</label>
              <Input
                type="number"
                name="basePrice"
                placeholder="e.g., 2100"
                value={formData.basePrice ?? ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3">
            Add Crop
          </Button>
        </form>
      </Card>
    </div>
  )
}
