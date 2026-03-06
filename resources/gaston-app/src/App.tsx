import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import Layout from './components/layout'
import Dashboard from './pages/dashboard'
import HealthTracker from './pages/health-tracker'
import CostsInsurance from './pages/costs-insurance'
import Nutrition from './pages/nutrition'
import Community from './pages/community'
import Account from './pages/account'
import Shop from './pages/shop'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="health" element={<HealthTracker />} />
            <Route path="costs" element={<CostsInsurance />} />
            <Route path="nutrition" element={<Nutrition />} />
            <Route path="community" element={<Community />} />
            <Route path="account" element={<Account />} />
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
