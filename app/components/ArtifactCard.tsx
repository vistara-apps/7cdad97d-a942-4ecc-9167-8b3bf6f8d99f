'use client'

import { Thermometer, Droplets, MapPin, Calendar } from 'lucide-react'

interface ArtifactCardProps {
  artifact: {
    id: string
    name: string
    accessionNumber: string
    currentLocation: string
    lastReportDate: string
    status: 'good' | 'warning' | 'critical'
    temperature: number
    humidity: number
    imageUrl: string
  }
}

export function ArtifactCard({ artifact }: ArtifactCardProps) {
  const statusColors = {
    good: 'bg-green-500',
    warning: 'bg-yellow-500',
    critical: 'bg-red-500',
  }

  const statusLabels = {
    good: 'Good',
    warning: 'Warning',
    critical: 'Critical',
  }

  return (
    <div className="bg-surface rounded-lg overflow-hidden card-shadow hover:scale-105 transition-smooth cursor-pointer">
      <div className="relative h-48 bg-bg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-surface rounded-lg flex items-center justify-center">
            <span className="text-4xl">🏺</span>
          </div>
        </div>
        <div className={`absolute top-3 right-3 px-3 py-1 ${statusColors[artifact.status]} text-white text-xs font-medium rounded-full`}>
          {statusLabels[artifact.status]}
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-fg truncate">{artifact.name}</h3>
          <p className="text-sm text-muted">{artifact.accessionNumber}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{artifact.currentLocation}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <Calendar className="w-4 h-4" />
            <span>Last report: {new Date(artifact.lastReportDate).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-2 border-t border-border">
          <div className="flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-fg">{artifact.temperature}°C</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-fg">{artifact.humidity}%</span>
          </div>
        </div>

        <button className="w-full py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-smooth text-sm font-medium">
          View Details
        </button>
      </div>
    </div>
  )
}
