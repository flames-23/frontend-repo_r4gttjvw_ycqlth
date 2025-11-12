import Navbar from '../components/Navbar'

export default function Help() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 space-y-4">
        <h1 className="text-xl font-semibold">Help & Support</h1>
        <p className="text-sm text-gray-700">Need assistance? Explore FAQs or contact support.</p>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Use the search bar to quickly find documents across departments.</li>
            <li>Filters can be combined for precise results.</li>
            <li>Contact People Ops for permission issues.</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
