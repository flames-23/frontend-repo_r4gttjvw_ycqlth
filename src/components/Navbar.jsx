import { Link, NavLink } from 'react-router-dom'
import { User, HelpCircle } from 'lucide-react'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
    isActive ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'
  }`

export default function Navbar() {
  return (
    <header className="w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-200">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Primary Navigation"
      >
        <div className="flex items-center gap-3">
          <div
            className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold shadow"
            aria-hidden
          >
            T
          </div>
          <Link
            to="/"
            className="text-lg sm:text-xl font-semibold text-gray-900"
            aria-label="TechVista Home"
          >
            TechVista HR Docs
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-1" role="menubar">
          <NavLink to="/" className={navLinkClass} role="menuitem">
            Dashboard
          </NavLink>
          <NavLink to="/library" className={navLinkClass} role="menuitem">
            Documents
          </NavLink>
          <NavLink to="/departments" className={navLinkClass} role="menuitem">
            Departments
          </NavLink>
          <NavLink to="/help" className={navLinkClass} role="menuitem">
            Help
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Help"
          >
            <HelpCircle className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">Help</span>
          </button>
          <button
            type="button"
            className="relative inline-flex items-center justify-center h-9 w-9 rounded-full bg-gradient-to-br from-emerald-500 to-amber-400 text-white shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label="Profile"
          >
            <User className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </nav>
    </header>
  )
}
