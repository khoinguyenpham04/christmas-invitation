import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 text-center py-2 text-xs text-gray-500">
      <p>Made by Noah</p>
      <a
        href="https://github.com/yourusername/christmas-invitation"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center hover:text-gray-700 transition-colors"
      >
        <Github className="w-4 h-4 mr-1" />
        Star on GitHub
      </a>
    </footer>
  )
}

