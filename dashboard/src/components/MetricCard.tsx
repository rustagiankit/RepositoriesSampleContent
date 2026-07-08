import type { Metric } from '../data/mockData'

type MetricCardProps = {
  metric: Metric
}

export function MetricCard({ metric }: MetricCardProps) {
  const isPositive = metric.change >= 0

  return (
    <article className="metric-card">
      <p className="metric-label">{metric.label}</p>
      <p className="metric-value">{metric.value}</p>
      <p className={`metric-change ${isPositive ? 'positive' : 'negative'}`}>
        {isPositive ? '↑' : '↓'} {Math.abs(metric.change)}% <span>{metric.period}</span>
      </p>
    </article>
  )
}
