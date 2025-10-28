"use client"

import { useState } from "react"
import LoginPage from "@/components/auth/login-page"
import FarmerDashboard from "@/components/dashboards/farmer-dashboard"
import ConsumerDashboard from "@/components/dashboards/consumer-dashboard"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState<"farmer" | "consumer">("farmer")

  const handleLogin = (role: "farmer" | "consumer") => {
    setUserRole(role)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />
  }

  return (
    <>
      {userRole === "farmer" ? (
        <FarmerDashboard onLogout={handleLogout} onSwitchRole={() => setIsLoggedIn(false)} />
      ) : (
        <ConsumerDashboard onLogout={handleLogout} onSwitchRole={() => setIsLoggedIn(false)} />
      )}
    </>
  )
}
