import { ActivityTable } from './components/ActivityTable'
import { CategoryChart } from './components/CategoryChart'
import { MetricCard } from './components/MetricCard'
import { RevenueChart } from './components/RevenueChart'
import { metrics, navItems } from './data/mockData'
import './index.css'

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-icon">◆</span>
          <span className="brand-name">Pulse</span>
        </div>
        <nav className="nav">
          {navItems.map((item, i) => (
            <button key={item} className={`nav-item ${i === 0 ? 'active' : ''}`} type="button">
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back — here&apos;s what&apos;s happening today.</p>
          </div>
          <div className="topbar-actions">
            <span className="date-pill">July 8, 2026</span>
            <button className="primary-btn" type="button">
              Export Report
            </button>
          </div>
        </header>

        <section className="metrics-grid">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </section>

        <section className="charts-grid">
          <RevenueChart />
          <CategoryChart />
        </section>

        <ActivityTable />
      </main>
    </div>
  )
}

export default App
