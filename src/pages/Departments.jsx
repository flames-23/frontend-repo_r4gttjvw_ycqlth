import Navbar from '../components/Navbar'
import DepartmentsGrid from '../components/DepartmentsGrid'

export default function Departments() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <header className="space-y-1">
          <h1 className="text-xl font-semibold">Departments</h1>
          <p className="text-sm text-gray-600">Browse documents by team.</p>
        </header>
        <DepartmentsGrid />
      </main>
    </div>
  )
}
