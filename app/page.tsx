'use client'

import { useEffect, useState } from 'react'
import { Shield, AlertTriangle, Award, FileText, TrendingUp, Bell } from 'lucide-react'
import { ArtifactCard } from './components/ArtifactCard'
import { AlertCard } from './components/AlertCard'
import { StatsCard } from './components/StatsCard'
import { Header } from './components/Header'

interface Artifact {
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

interface Alert {
  id: string
  artifactId: string
  artifactName: string
  type: 'environmental_deviation' | 'degradation_escalation'
  severity: 'critical' | 'warning' | 'info'
  message: string
  timestamp: string
  status: 'unresolved' | 'resolved'
}

export default function Home() {
  const [artifacts, setArtifacts] = useState<Artifact[]>([])
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setArtifacts([
        {
          id: '1',
          name: 'Ancient Egyptian Vase',
          accessionNumber: 'AEV-2024-001',
          currentLocation: 'Gallery 3, Case A',
          lastReportDate: '2024-01-15',
          status: 'good',
          temperature: 21.5,
          humidity: 45,
          imageUrl: '/artifacts/vase.jpg',
        },
        {
          id: '2',
          name: 'Renaissance Portrait',
          accessionNumber: 'RP-2023-042',
          currentLocation: 'Gallery 1, Wall B',
          lastReportDate: '2024-01-14',
          status: 'warning',
          temperature: 23.2,
          humidity: 52,
          imageUrl: '/artifacts/portrait.jpg',
        },
        {
          id: '3',
          name: 'Ming Dynasty Scroll',
          accessionNumber: 'MDS-2022-018',
          currentLocation: 'Archive Room 2',
          lastReportDate: '2024-01-13',
          status: 'critical',
          temperature: 25.8,
          humidity: 58,
          imageUrl: '/artifacts/scroll.jpg',
        },
      ])

      setAlerts([
        {
          id: '1',
          artifactId: '3',
          artifactName: 'Ming Dynasty Scroll',
          type: 'environmental_deviation',
          severity: 'critical',
          message: 'Temperature exceeded safe threshold (>24°C)',
          timestamp: '2024-01-15T14:30:00Z',
          status: 'unresolved',
        },
        {
          id: '2',
          artifactId: '2',
          artifactName: 'Renaissance Portrait',
          type: 'environmental_deviation',
          severity: 'warning',
          message: 'Humidity approaching upper limit',
          timestamp: '2024-01-15T10:15:00Z',
          status: 'unresolved',
        },
      ])

      setLoading(false)
    }, 1000)
  }, [])

  const stats = {
    totalArtifacts: artifacts.length,
    activeAlerts: alerts.filter(a => a.status === 'unresolved').length,
    reportsThisMonth: 24,
    badgesEarned: 3,
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="animate-pulse space-y-4 w-full max-w-md px-6">
          <div className="h-12 bg-surface rounded-lg"></div>
          <div className="h-32 bg-surface rounded-lg"></div>
          <div className="h-32 bg-surface rounded-lg"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            icon={<Shield className="w-5 h-5" />}
            label="Total Artifacts"
            value={stats.totalArtifacts}
            trend="+2 this week"
          />
          <StatsCard
            icon={<AlertTriangle className="w-5 h-5" />}
            label="Active Alerts"
            value={stats.activeAlerts}
            trend="Requires attention"
            variant="warning"
          />
          <StatsCard
            icon={<FileText className="w-5 h-5" />}
            label="Reports"
            value={stats.reportsThisMonth}
            trend="This month"
          />
          <StatsCard
            icon={<Award className="w-5 h-5" />}
            label="Badges"
            value={stats.badgesEarned}
            trend="Earned"
            variant="success"
          />
        </div>

        {/* Active Alerts */}
        {alerts.filter(a => a.status === 'unresolved').length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-fg flex items-center gap-2">
                <Bell className="w-6 h-6 text-accent" />
                Active Alerts
              </h2>
              <span className="text-sm text-muted">
                {alerts.filter(a => a.status === 'unresolved').length} unresolved
              </span>
            </div>
            <div className="space-y-3">
              {alerts
                .filter(a => a.status === 'unresolved')
                .map(alert => (
                  <AlertCard key={alert.id} alert={alert} />
                ))}
            </div>
          </section>
        )}

        {/* Artifacts Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-fg flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-accent" />
              Monitored Artifacts
            </h2>
            <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-smooth text-sm font-medium">
              Add Artifact
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artifacts.map(artifact => (
              <ArtifactCard key={artifact.id} artifact={artifact} />
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-surface rounded-lg p-6 card-shadow">
          <h3 className="text-lg font-semibold text-fg mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button className="p-4 bg-bg rounded-lg hover:bg-opacity-80 transition-smooth text-center">
              <FileText className="w-6 h-6 text-accent mx-auto mb-2" />
              <span className="text-sm text-fg">New Report</span>
            </button>
            <button className="p-4 bg-bg rounded-lg hover:bg-opacity-80 transition-smooth text-center">
              <Shield className="w-6 h-6 text-accent mx-auto mb-2" />
              <span className="text-sm text-fg">View All</span>
            </button>
            <button className="p-4 bg-bg rounded-lg hover:bg-opacity-80 transition-smooth text-center">
              <Award className="w-6 h-6 text-accent mx-auto mb-2" />
              <span className="text-sm text-fg">Badges</span>
            </button>
            <button className="p-4 bg-bg rounded-lg hover:bg-opacity-80 transition-smooth text-center">
              <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
              <span className="text-sm text-fg">Analytics</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
