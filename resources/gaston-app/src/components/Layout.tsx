import { Outlet } from 'react-router-dom'
import Header from './header'
import BottomTabBar from './bottom-tab-bar'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-grey-100">
      <Header />
      <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
        <Outlet />
      </main>
      <BottomTabBar />
    </div>
  )
}
