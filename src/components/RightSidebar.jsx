export default function RightSidebar() {
  return (
    <aside
      className="sticky top-20 space-y-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
      aria-label="Helpful tips and shortcuts"
    >
      <div>
        <h3 className="text-sm font-semibold text-gray-900">Tips</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>Use filters to narrow results quickly.</li>
          <li>Press ⌘K to jump to search.</li>
          <li>Pin frequently used documents.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-900">Shortcuts</h3>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {[
            'New Policy',
            'Upload Form',
            'Share Link',
            'Request Edit',
          ].map((s) => (
            <button
              key={s}
              className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
