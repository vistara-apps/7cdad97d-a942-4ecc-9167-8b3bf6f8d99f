'use client'

import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-fg">Something went wrong!</h2>
          <p className="text-muted">
            We encountered an error while loading ArchiVault. Please try again.
          </p>
        </div>
        <button
          onClick={reset}
          className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-smooth font-medium"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
