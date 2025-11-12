import { Download, Eye } from 'lucide-react'

const mockRows = [
  { title: 'Employee Handbook 2025', type: 'Policy', dept: 'HR', date: '2025-09-15', format: 'PDF' },
  { title: 'Expense Reimbursement Form', type: 'Form', dept: 'Finance', date: '2025-09-10', format: 'DOCX' },
  { title: 'Onboarding Checklist', type: 'Checklist', dept: 'Operations', date: '2025-08-27', format: 'XLSX' },
  { title: 'Remote Work Policy', type: 'Policy', dept: 'Engineering', date: '2025-08-12', format: 'PDF' },
]

export default function DocumentsTable({ rows = mockRows }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200" role="table" aria-label="Recently updated documents">
          <thead className="bg-gray-50">
            <tr>
              {['Title','Type','Department','Date','Format','Actions'].map((h) => (
                <th key={h} scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {rows.map((r, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900 font-medium">{r.title}</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/10">
                    {r.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.dept}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{new Date(r.date).toLocaleDateString()}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.format}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex gap-2">
                    <button className="inline-flex items-center gap-1 rounded-lg border border-gray-200 px-2 py-1 text-xs text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <Eye className="h-4 w-4" aria-hidden /> View
                    </button>
                    <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-2 py-1 text-xs text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <Download className="h-4 w-4" aria-hidden /> Download
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
