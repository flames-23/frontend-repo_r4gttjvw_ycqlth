import { Calendar, ChevronDown, RotateCcw, Search } from 'lucide-react'

export default function LibraryFilters() {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        {['Department', 'Document Type', 'File Format'].map((label) => (
          <button
            key={label}
            className="inline-flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-haspopup="listbox"
            aria-label={`${label} filter`}
          >
            <span>{label}</span>
            <ChevronDown className="h-4 w-4" aria-hidden />
          </button>
        ))}
        <button
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Select date"
        >
          <Calendar className="h-4 w-4" aria-hidden />
          Date
        </button>
        <button
          className="inline-flex items-center gap-2 rounded-xl bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-600/20 px-3 py-2 text-sm hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-500"
          aria-label="Reset filters"
        >
          <RotateCcw className="h-4 w-4" aria-hidden />
          Reset
        </button>
      </div>

      <div className="relative">
        <input
          type="search"
          placeholder="Search in library..."
          className="w-full rounded-xl border border-gray-200 bg-white/80 px-10 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          aria-label="Search in library"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden />
      </div>
    </div>
  )
}
