import { recentActivity } from '../data/mockData'

export function ActivityTable() {
  return (
    <section className="panel table-panel">
      <header className="panel-header">
        <div>
          <h2>Recent Activity</h2>
          <p>Latest transactions and events</p>
        </div>
      </header>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Action</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((row) => (
              <tr key={row.id}>
                <td className="mono">{row.id}</td>
                <td>{row.customer}</td>
                <td>{row.action}</td>
                <td>{row.amount}</td>
                <td>
                  <span className={`status-badge status-${row.status}`}>{row.status}</span>
                </td>
                <td className="muted">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
