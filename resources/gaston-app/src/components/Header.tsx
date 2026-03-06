import { NavLink } from 'react-router-dom'
import { PawPrint, Search, User, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

const nav = [
  { to: '/',          label: 'Products' },
  { to: '/vet',       label: 'Insurance' },
  { to: '/food',      label: 'Nutrition' },
  { to: '/community', label: 'Community' },
]

export default function Header() {
  const [cartCount] = useState(2)

  return (
    <header className="bg-white border-b border-grey-200 shrink-0">
      {/* Top bar */}
      <div className="flex items-center justify-between px-8 h-16 gap-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center">
            <PawPrint size={18} className="text-white" />
          </div>
          <span className="font-rubrik font-bold text-[18px] text-grey-900 tracking-tight">ICA Gaston</span>
        </NavLink>

        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-500" />
            <input
              type="text"
              placeholder="Search products, brands…"
              className="w-full pl-9 pr-4 py-2 rounded-full bg-grey-100 border border-grey-200 font-text text-[14px] text-grey-900 placeholder:text-grey-500 focus:outline-none focus:border-orange-300 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 shrink-0">
          <NavLink
            to="/account"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-grey-100 transition-colors font-text text-[13px] text-grey-700"
          >
            <User size={18} />
            <span className="hidden lg:block">Mitt konto</span>
          </NavLink>
          <button className="relative flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-grey-100 transition-colors font-text text-[13px] text-grey-700">
            <ShoppingCart size={18} />
            <span className="hidden lg:block">Varukorg</span>
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-orange-400 font-rubrik font-bold text-[10px] text-white flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Nav bar */}
      <div className="border-t border-grey-200 bg-grey-100">
        <nav className="flex items-center gap-0.5 px-8 h-10">
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-md font-rubrik font-bold text-[13px] transition-colors
                 ${isActive
                   ? 'bg-orange-400 text-white'
                   : 'text-grey-700 hover:bg-grey-200 hover:text-grey-900'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
