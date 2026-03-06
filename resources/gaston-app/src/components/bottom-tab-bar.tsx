import { NavLink } from 'react-router-dom';
import { Home, HeartPulse, ShieldCheck, Salad, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const tabs = [
  { to: '/', icon: Home, labelKey: 'sidebar.dashboard' as const },
  { to: '/health', icon: HeartPulse, labelKey: 'sidebar.healthTracker' as const },
  { to: '/costs', icon: ShieldCheck, labelKey: 'sidebar.vetInsurance' as const },
  { to: '/nutrition', icon: Salad, labelKey: 'sidebar.foodNutrition' as const },
  { to: '/community', icon: Users, labelKey: 'sidebar.community' as const },
];

export default function BottomTabBar() {
  const { t } = useLanguage();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-16">
        {tabs.map(({ to, icon: Icon, labelKey }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-w-[44px] min-h-[44px] px-2 py-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1 ${
                isActive
                  ? 'text-orange-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`
            }
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs mt-0.5 leading-tight">{t(labelKey)}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
