export type Metric = {
  label: string
  value: string
  change: number
  period: string
}

export type Activity = {
  id: string
  customer: string
  action: string
  amount: string
  status: 'completed' | 'pending' | 'failed'
  time: string
}

export const metrics: Metric[] = [
  { label: 'Total Revenue', value: '$48,290', change: 12.4, period: 'vs last month' },
  { label: 'Active Users', value: '2,847', change: 8.1, period: 'vs last month' },
  { label: 'Conversion Rate', value: '3.24%', change: -0.6, period: 'vs last month' },
  { label: 'Avg. Order Value', value: '$86.40', change: 4.2, period: 'vs last month' },
]

export const revenueTrend = [
  { month: 'Jan', revenue: 32000, users: 2100 },
  { month: 'Feb', revenue: 34500, users: 2280 },
  { month: 'Mar', revenue: 31200, users: 2190 },
  { month: 'Apr', revenue: 38900, users: 2450 },
  { month: 'May', revenue: 42100, users: 2610 },
  { month: 'Jun', revenue: 39800, users: 2540 },
  { month: 'Jul', revenue: 48290, users: 2847 },
]

export const categoryBreakdown = [
  { category: 'Electronics', sales: 18400 },
  { category: 'Clothing', sales: 12300 },
  { category: 'Home', sales: 9800 },
  { category: 'Books', sales: 4200 },
  { category: 'Other', sales: 3590 },
]

export const recentActivity: Activity[] = [
  { id: 'ORD-1042', customer: 'Sarah Chen', action: 'New purchase', amount: '$124.00', status: 'completed', time: '2 min ago' },
  { id: 'ORD-1041', customer: 'Marcus Webb', action: 'Subscription renewal', amount: '$29.99', status: 'completed', time: '14 min ago' },
  { id: 'ORD-1040', customer: 'Elena Rossi', action: 'Refund requested', amount: '$67.50', status: 'pending', time: '32 min ago' },
  { id: 'ORD-1039', customer: 'James Okonkwo', action: 'New purchase', amount: '$210.00', status: 'completed', time: '1 hr ago' },
  { id: 'ORD-1038', customer: 'Priya Sharma', action: 'Payment failed', amount: '$45.00', status: 'failed', time: '2 hr ago' },
  { id: 'ORD-1037', customer: 'Tom Bradley', action: 'New purchase', amount: '$89.99', status: 'completed', time: '3 hr ago' },
]

export const navItems = ['Overview', 'Analytics', 'Customers', 'Products', 'Settings']
