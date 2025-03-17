'use client'

import { Button } from "@/components/ui/button"

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        <div className="max-w-md mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-medium tracking-tight text-zinc-900 mb-2">
              Client Portal
            </h1>
            <p className="text-zinc-600">
              Access your project dashboard, resources, and support
            </p>
          </div>

          <div className="border border-zinc-200 rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-zinc-200 rounded-md text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zinc-900 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-zinc-200 rounded-md text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 border-zinc-300 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-zinc-600">
                    Remember me
                  </label>
                </div>

                <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot password?
                </a>
              </div>

              <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors py-2 rounded text-sm">
                Sign In
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-zinc-200">
              <div className="text-center">
                <p className="text-sm text-zinc-600">
                  Need access to the portal?{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Contact your account manager
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-600">
              Having trouble? <a href="#" className="text-blue-600 hover:text-blue-500">Get help</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 