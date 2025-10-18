export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-md px-6">
        <div className="h-12 bg-surface rounded-lg"></div>
        <div className="h-32 bg-surface rounded-lg"></div>
        <div className="h-32 bg-surface rounded-lg"></div>
        <div className="h-32 bg-surface rounded-lg"></div>
      </div>
    </div>
  )
}
