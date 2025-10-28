"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Leaf } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"
import { LanguageSwitcher } from "@/components/language-switcher"

interface LoginPageProps {
  onLogin: (role: "farmer" | "consumer") => void
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const [activeTab, setActiveTab] = useState<"farmer" | "consumer">("farmer")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
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
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>

      <Card className="w-full max-w-md shadow-lg border-0">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Leaf className="w-8 h-8 text-emerald-600" />
            <h1 className="text-2xl font-bold text-emerald-900">{t("login.title")}</h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("farmer")}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                activeTab === "farmer" ? "bg-emerald-600 text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t("login.farmer")}
            </button>
            <button
              onClick={() => setActiveTab("consumer")}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                activeTab === "consumer" ? "bg-emerald-600 text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t("login.consumer")}
            </button>
          </div>

          {/* Form */}
          {!showSignup ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t("login.email")}</label>
                <Input
                  type="email"
                  placeholder={t("login.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t("login.password")}</label>
                <Input
                  type="password"
                  placeholder={t("login.passwordPlaceholder")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button
                onClick={handleLogin}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2"
              >
                {t("login.loginButton")}
              </Button>
              <button
                onClick={() => setShowSignup(true)}
                className="w-full text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                {t("login.signupLink")}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t("login.fullName")}</label>
                <Input type="text" placeholder={t("login.fullNamePlaceholder")} className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t("login.email")}</label>
                <Input type="email" placeholder={t("login.emailPlaceholder")} className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t("login.password")}</label>
                <Input type="password" placeholder={t("login.passwordPlaceholder")} className="w-full" />
              </div>
              {activeTab === "farmer" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("login.farmSize")}</label>
                    <Input type="number" placeholder={t("login.farmSizePlaceholder")} className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("login.location")}</label>
                    <Input type="text" placeholder={t("login.locationPlaceholder")} className="w-full" />
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
                {t("login.signupButton")}
              </Button>
              <button
                onClick={() => setShowSignup(false)}
                className="w-full text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                {t("login.backToLogin")}
              </button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
