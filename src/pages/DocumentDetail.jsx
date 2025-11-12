import Navbar from '../components/Navbar'

export default function DocumentDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold">Employee Handbook 2025</h1>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/10">Policy</span>
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10">HR</span>
            <span className="text-gray-600">Last updated: Sep 15, 2025</span>
          </div>
        </header>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
            <span><strong className="text-gray-900">Format:</strong> PDF</span>
            <span><strong className="text-gray-900">Size:</strong> 2.4 MB</span>
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900">Description</h2>
            <p className="mt-1 text-sm text-gray-700">
              Comprehensive guide to company policies, culture, and employee resources. Use this as a reference for day-to-day workflows and compliance. Updated annually.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900">Metadata</h2>
            <dl className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <div className="flex justify-between border-b border-gray-100 py-2"><dt className="text-gray-600">Department</dt><dd className="text-gray-900">HR</dd></div>
              <div className="flex justify-between border-b border-gray-100 py-2"><dt className="text-gray-600">Created By</dt><dd className="text-gray-900">People Ops</dd></div>
              <div className="flex justify-between border-b border-gray-100 py-2"><dt className="text-gray-600">Last Updated</dt><dd className="text-gray-900">Sep 15, 2025</dd></div>
              <div className="flex justify-between border-b border-gray-100 py-2"><dt className="text-gray-600">Type</dt><dd className="text-gray-900">Policy</dd></div>
              <div className="flex justify-between border-b border-gray-100 py-2"><dt className="text-gray-600">File Size</dt><dd className="text-gray-900">2.4 MB</dd></div>
            </dl>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              View Document
            </button>
            <button className="rounded-xl bg-white ring-1 ring-inset ring-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
              Download
            </button>
          </div>

          <div className="rounded-xl bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-600/20 px-4 py-3 text-sm">
            Newer version available.
          </div>
        </section>
      </main>
    </div>
  )
}
