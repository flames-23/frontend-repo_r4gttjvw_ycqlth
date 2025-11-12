export default function Pagination() {
  return (
    <nav className="flex items-center justify-between" aria-label="Pagination">
      <button className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        Previous
      </button>
      <div className="hidden sm:flex items-center gap-1">
        {[1,2,3,4,5].map((n) => (
          <button
            key={n}
            className={`h-8 w-8 rounded-lg text-sm font-medium ${n===1 ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            aria-current={n===1 ? 'page' : undefined}
          >
            {n}
          </button>
        ))}
      </div>
      <button className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        Next
      </button>
    </nav>
  )
}
