import { portfolioData } from '../data/portfolioData'

export default function Footer() {
  const { footer } = portfolioData

  return (
    <footer className="max-w-6xl mx-auto px-6 md:px-8 py-8 border-t border-carbon-700 flex items-center justify-center sm:justify-start">
      <p className="font-mono text-[11px] text-carbon-500">{footer.text}</p>
    </footer>
  )
}
