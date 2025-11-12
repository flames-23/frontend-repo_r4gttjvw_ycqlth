import { Building2, Cog, Cpu, DollarSign, Headphones, Megaphone, Users } from 'lucide-react'

const departments = [
  { name: 'Engineering', icon: Cpu, count: 128, color: 'from-indigo-500 to-violet-500' },
  { name: 'Sales', icon: Megaphone, count: 76, color: 'from-emerald-500 to-teal-500' },
  { name: 'Marketing', icon: Megaphone, count: 94, color: 'from-pink-500 to-rose-500' },
  { name: 'Operations', icon: Cog, count: 58, color: 'from-blue-500 to-cyan-500' },
  { name: 'Finance', icon: DollarSign, count: 43, color: 'from-amber-500 to-orange-500' },
  { name: 'Customer Support', icon: Headphones, count: 35, color: 'from-teal-500 to-emerald-500' },
  { name: 'HR', icon: Users, count: 67, color: 'from-purple-500 to-fuchsia-500' },
]

export default function DepartmentsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {departments.map(({ name, icon: Icon, count, color }) => (
        <div key={name} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center shadow` }>
            <Icon className="h-6 w-6" aria-hidden />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-gray-900">{name}</h3>
              <p className="text-sm text-gray-600">{count} documents</p>
            </div>
            <button className="rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              View Documents
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
