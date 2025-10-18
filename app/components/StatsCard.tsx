'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatsCardProps {
  icon: React.ReactNode
  label: string
  value: number
  trend?: string
  variant?: 'default' | 'warning' | 'success'
}

export function StatsCard({ icon, label, value, trend, variant = 'default' }: StatsCardProps) {
  const variantColors = {
    default: 'text-accent',
    warning: 'text-yellow-500',
    success: 'text-green-500',
  }

  return (
    <div className="bg-surface rounded-lg p-4 card-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className={`w-10 h-10 bg-bg rounded-lg flex items-center justify-center ${variantColors[variant]}`}>
          {icon}
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-2xl font-bold text-fg">{value}</p>
        <p className="text-sm text-muted">{label}</p>
        {trend && (
          <p className="text-xs text-muted flex items-center gap-1">
            {variant === 'success' && <TrendingUp className="w-3 h-3" />}
            {variant === 'warning' && <TrendingDown className="w-3 h-3" />}
            {trend}
          </p>
        )}
      </div>
    </div>
  )
}
