import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import HealthTracker from './pages/HealthTracker'
import VetInsurance from './pages/VetInsurance'
import FoodNutrition from './pages/FoodNutrition'
import Community from './pages/Community'
import Account from './pages/Account'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="health" element={<HealthTracker />} />
            <Route path="vet" element={<VetInsurance />} />
            <Route path="food" element={<FoodNutrition />} />
            <Route path="community" element={<Community />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
