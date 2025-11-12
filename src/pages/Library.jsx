import Navbar from '../components/Navbar'
import LibraryFilters from '../components/LibraryFilters'
import DocumentsTable from '../components/DocumentsTable'
import Pagination from '../components/Pagination'
import EmptyState from '../components/EmptyState'
import { useState } from 'react'

export default function Library() {
  const [hasResults] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <header>
          <h1 className="text-xl font-semibold">Document Library</h1>
          <p className="text-sm text-gray-600">Search and filter across all HR documents.</p>
        </header>
        <LibraryFilters />
        {hasResults ? (
          <div className="space-y-4">
            <DocumentsTable />
            <Pagination />
          </div>
        ) : (
          <EmptyState />
        )}
      </main>
    </div>
  )
}
