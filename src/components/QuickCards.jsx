import { FileText, FileCog, FileSpreadsheet, FileCheck, BookOpen } from 'lucide-react'

const items = [
  { label: 'Policies', icon: FileText, color: 'from-indigo-500 to-violet-500' },
  { label: 'Forms', icon: FileCog, color: 'from-emerald-500 to-teal-500' },
  { label: 'Templates', icon: FileSpreadsheet, color: 'from-amber-500 to-orange-500' },
  { label: 'Guides', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
  { label: 'Checklists', icon: FileCheck, color: 'from-pink-500 to-rose-500' },
]

export default function QuickCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {items.map(({ label, icon: Icon, color }) => (
        <button
          key={label}
          type="button"
          className="group relative rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label={`Open ${label}`}
        >
          <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center shadow` }>
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <div className="mt-3">
            <p className="text-sm font-semibold text-gray-900">{label}</p>
            <p className="text-xs text-gray-500">Quick access</p>
          </div>
          <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" aria-hidden />
        </button>
      ))}
    </div>
  )
}
