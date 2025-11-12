export default function EmptyState() {
  return (
    <div className="text-center py-16">
      <div className="mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 opacity-90" aria-hidden />
      <h3 className="mt-6 text-sm font-semibold text-gray-900">No results</h3>
      <p className="mt-2 text-sm text-gray-600">Try adjusting your filters or search terms.</p>
    </div>
  )
}
