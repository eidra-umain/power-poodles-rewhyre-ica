import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, HeartPulse, ShieldCheck, Salad, Users, PawPrint
} from 'lucide-react'

const nav = [
  { to: '/',         icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/health',   icon: HeartPulse,      label: 'Health Tracker' },
  { to: '/vet',      icon: ShieldCheck,     label: 'Vet & Insurance' },
  { to: '/food',     icon: Salad,           label: 'Food & Nutrition' },
  { to: '/community',icon: Users,           label: 'Community' },
]

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-between w-60 h-full bg-blue-600 shrink-0">
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-5 py-6">
          <PawPrint size={24} className="text-white" />
          <span className="font-rubrik font-bold text-lg text-white">ICA Gaston</span>
        </div>

        {/* Section label */}
        <p className="px-5 pb-1 font-rubrik font-bold text-[10px] tracking-[1.5px] text-blue-300 uppercase">
          Menu
        </p>

        {/* Nav items */}
        <nav className="flex flex-col gap-0.5 px-2">
          {nav.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-rubrik transition-colors
                 ${isActive
                   ? 'bg-white/10 text-white font-bold'
                   : 'text-blue-200 hover:bg-white/10 hover:text-white'}`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* User */}
      <div className="px-2 pb-3">
        <div className="h-px bg-white/20 mx-2 mb-2" />
        <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-md">
          <div className="w-8 h-8 rounded-full bg-blue-400 shrink-0" />
          <div className="min-w-0">
            <p className="font-rubrik font-bold text-[13px] text-white truncate">Anna Lindström</p>
            <p className="font-text text-[11px] text-blue-300 truncate">anna@example.se</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
