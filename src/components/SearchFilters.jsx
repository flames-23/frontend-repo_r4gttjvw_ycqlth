import { ChevronDown, Filter } from 'lucide-react'

export default function SearchFilters({ onSearch }) {
  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSearch?.(new FormData(e.currentTarget))
        }}
        className="grid grid-cols-1 gap-3 sm:grid-cols-6"
        aria-label="Search and Filter Documents"
      >
        <div className="sm:col-span-3">
          <label htmlFor="query" className="sr-only">
            Search documents
          </label>
          <div className="relative">
            <input
              id="query"
              name="q"
              type="search"
              placeholder="Search documents..."
              className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 pr-10 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden>
              ⌘K
            </span>
          </div>
        </div>

        {['Type', 'Department', 'Date Updated'].map((label) => (
          <div key={label} className="sm:col-span-1">
            <label className="sr-only">{label}</label>
            <button
              type="button"
              className="w-full inline-flex items-center justify-between rounded-xl border border-gray-200 bg-white/80 px-3 py-3 text-sm text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-haspopup="listbox"
              aria-label={`${label} filter`}
            >
              <span>{label}</span>
              <ChevronDown className="h-4 w-4" aria-hidden />
            </button>
          </div>
        ))}

        <div className="sm:col-span-1">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Filter className="h-4 w-4" aria-hidden />
            Apply
          </button>
        </div>
      </form>
    </div>
  )
}
