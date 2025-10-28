"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Leaf } from "lucide-react"

interface LoginPageProps {
  onLogin: (role: "farmer" | "consumer") => void
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [activeTab, setActiveTab] = useState<"farmer" | "consumer">("farmer")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showSignup, setShowSignup] = useState(false)

  const handleLogin = () => {
    if (email && password) {
      onLogin(activeTab)
      setEmail("")
      setPassword("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg border-0">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Leaf className="w-8 h-8 text-emerald-600" />
            <h1 className="text-2xl font-bold text-emerald-900">Smart Farmer</h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("farmer")}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                activeTab === "farmer" ? "bg-emerald-600 text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Farmer
            </button>
            <button
              onClick={() => setActiveTab("consumer")}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                activeTab === "consumer" ? "bg-emerald-600 text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Consumer
            </button>
          </div>

          {/* Form */}
          {!showSignup ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button
                onClick={handleLogin}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2"
              >
                Login
              </Button>
              <button
                onClick={() => setShowSignup(true)}
                className="w-full text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                Don't have an account? Sign up
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <Input type="text" placeholder="Your name" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input type="email" placeholder="your@email.com" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <Input type="password" placeholder="••••••••" className="w-full" />
              </div>
              {activeTab === "farmer" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Farm Size (acres)</label>
                    <Input type="number" placeholder="50" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <Input type="text" placeholder="State, District" className="w-full" />
                  </div>
                </>
              )}
              <Button
                onClick={() => {
                  setShowSignup(false)
                  handleLogin()
                }}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2"
              >
                Sign Up
              </Button>
              <button
                onClick={() => setShowSignup(false)}
                className="w-full text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                Back to Login
              </button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
