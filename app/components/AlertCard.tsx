'use client'

import { AlertTriangle, Clock, CheckCircle } from 'lucide-react'

interface AlertCardProps {
  alert: {
    id: string
    artifactId: string
    artifactName: string
    type: 'environmental_deviation' | 'degradation_escalation'
    severity: 'critical' | 'warning' | 'info'
    message: string
    timestamp: string
    status: 'unresolved' | 'resolved'
  }
}

export function AlertCard({ alert }: AlertCardProps) {
  const severityColors = {
    critical: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  }

  const severityBorders = {
    critical: 'border-red-500',
    warning: 'border-yellow-500',
    info: 'border-blue-500',
  }

  return (
    <div className={`bg-surface rounded-lg p-4 border-l-4 ${severityBorders[alert.severity]} card-shadow`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className={`w-10 h-10 ${severityColors[alert.severity]} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-semibold text-fg">{alert.artifactName}</h4>
            <p className="text-sm text-muted mt-1">{alert.message}</p>
            <div className="flex items-center gap-2 mt-2 text-xs text-muted">
              <Clock className="w-3 h-3" />
              <span>{new Date(alert.timestamp).toLocaleString()}</span>
            </div>
          </div>
        </div>
        <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-smooth text-sm font-medium whitespace-nowrap">
          Resolve
        </button>
      </div>
    </div>
  )
}
