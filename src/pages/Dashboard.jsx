import Navbar from '../components/Navbar'
import HeroSpline from '../components/HeroSpline'
import SearchFilters from '../components/SearchFilters'
import QuickCards from '../components/QuickCards'
import DocumentsTable from '../components/DocumentsTable'
import RightSidebar from '../components/RightSidebar'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <section className="space-y-6">
          <HeroSpline />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-9 space-y-6">
              <SearchFilters />
              <QuickCards />
              <div className="space-y-3">
                <h2 className="text-base font-semibold text-gray-900">Recently updated</h2>
                <DocumentsTable />
              </div>
            </div>
            <div className="lg:col-span-3">
              <RightSidebar />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
