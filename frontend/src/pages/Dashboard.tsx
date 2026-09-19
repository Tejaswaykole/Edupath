import { useAuthStore } from '../store/authStore'

export default function Dashboard() {
  const { user, logout } = useAuthStore()

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-foreground">EduPath Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">{user?.email || 'Learner'}</span>
          <button 
            onClick={logout}
            className="text-sm font-medium text-destructive hover:underline"
          >
            Log out
          </button>
        </div>
      </header>
      <main className="p-6 max-w-5xl mx-auto space-y-6">
        <div className="h-32 rounded-xl border border-border bg-card/50 flex flex-col justify-center items-center text-muted-foreground p-6">
          <p>Welcome to your learning journey.</p>
          <p className="text-sm mt-2">Content from Stitch UI will be integrated here.</p>
        </div>
      </main>
    </div>
  )
}
