export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-card p-8 shadow-sm border border-border">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Create an account</h2>
          <p className="text-sm text-muted-foreground mt-2">Join EduPath to start your learning journey.</p>
        </div>
        {/* Placeholder for Stitch UI Form Integration */}
        <div className="space-y-4">
          <div className="h-10 rounded-md bg-muted/50 w-full animate-pulse"></div>
          <div className="h-10 rounded-md bg-muted/50 w-full animate-pulse"></div>
          <div className="h-10 rounded-md bg-muted/50 w-full animate-pulse"></div>
          <div className="h-10 rounded-md bg-primary/20 w-full animate-pulse mt-6"></div>
        </div>
      </div>
    </div>
  )
}
