import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { categoryBreakdown } from '../data/mockData'

export function CategoryChart() {
  return (
    <section className="panel chart-panel">
      <header className="panel-header">
        <div>
          <h2>Sales by Category</h2>
          <p>Top performing product categories</p>
        </div>
      </header>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={categoryBreakdown} layout="vertical" margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
            <XAxis
              type="number"
              tick={{ fill: '#64748b', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            />
            <YAxis
              type="category"
              dataKey="category"
              tick={{ fill: '#334155', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={80}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 10,
                border: '1px solid #e2e8f0',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
              }}
              formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Sales']}
            />
            <Bar dataKey="sales" fill="#0ea5e9" radius={[0, 6, 6, 0]} barSize={22} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
