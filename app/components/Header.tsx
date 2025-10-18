'use client'

import { Shield, Menu, User } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-surface border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-fg">ArchiVault</h1>
              <p className="text-xs text-muted">Artifact Preservation</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-smooth text-sm font-medium">
              Connect Wallet
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 bg-bg rounded-lg flex items-center justify-center hover:bg-opacity-80 transition-smooth"
            >
              {menuOpen ? <User className="w-5 h-5 text-fg" /> : <Menu className="w-5 h-5 text-fg" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-4 p-4 bg-bg rounded-lg space-y-2">
            <button className="w-full text-left px-4 py-2 text-fg hover:bg-surface rounded-md transition-smooth">
              Profile
            </button>
            <button className="w-full text-left px-4 py-2 text-fg hover:bg-surface rounded-md transition-smooth">
              Settings
            </button>
            <button className="w-full text-left px-4 py-2 text-fg hover:bg-surface rounded-md transition-smooth md:hidden">
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
