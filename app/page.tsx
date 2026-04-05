import Link from 'next/link'

const features = [
  {
    icon: '📺',
    title: 'Live TV',
    desc: 'Watch thousands of live channels in HD quality with low latency playback.',
  },
  {
    icon: '🎬',
    title: 'Movies & Series',
    desc: 'Browse and stream your VOD library — movies and full series in one place.',
  },
  {
    icon: '⬇️',
    title: 'Downloads',
    desc: 'Download content for offline viewing. Background downloads with progress notifications.',
  },
  {
    icon: '🎙️',
    title: 'Voice Search',
    desc: 'Find channels, movies, and series instantly with built-in voice search.',
  },
  {
    icon: '📡',
    title: 'Cast Support',
    desc: 'Stream to your TV with Google Cast. One tap to cast any channel or video.',
  },
  {
    icon: '👤',
    title: 'Multiple Profiles',
    desc: 'Create separate profiles for family members, including a kids mode with content filters.',
  },
  {
    icon: '🖼️',
    title: 'Picture in Picture',
    desc: 'Keep watching while browsing. PiP mode keeps your stream on screen.',
  },
  {
    icon: '🔒',
    title: 'Secure Storage',
    desc: 'Your credentials are stored securely on your device using encrypted storage.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-black text-sm">G</div>
            <span className="font-bold text-lg tracking-tight">Galya Player</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-surface border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-400 mb-8">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Available on Google Play
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            Your IPTV,{' '}
            <span className="text-primary">your way.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Galya Player is a powerful IPTV streaming app for Android. Connect your own
            Xtream or M3U subscription and enjoy live TV, movies, and series — all in one
            beautiful, fast player.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.galyaplayer.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.32.18.68.24 1.05.19l11.89-11.89-3.03-3.03L3.18 23.76zM21.4 10.6l-2.62-1.5-3.37 3.37 3.37 3.38 2.64-1.51c.75-.43.75-1.31-.02-1.74zM2.01 1.05C1.98 1.2 2 1.36 2 1.54v20.91c0 .18 0 .35.03.51l11.9-11.9L2.01 1.05zM13.1 12.06l3.04-3.04L4.23.28C3.87.08 3.5.03 3.18.19l9.92 11.87z" />
              </svg>
              Download on Google Play
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium px-4 py-4"
            >
              See features
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Tagline strip */}
      <div className="bg-primary/5 border-y border-primary/10 py-5 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-2 text-sm text-gray-400">
          {['Xtream API', 'M3U Playlists', 'HD Playback', 'Google Cast', 'Offline Downloads', 'Voice Search', 'Kids Mode', 'Multi-profile'].map(t => (
            <span key={t} className="flex items-center gap-2">
              <span className="text-primary">✓</span> {t}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
              Everything you need in one app
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Bring your own IPTV subscription — Galya Player handles the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-surface border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-colors group"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Get started in 3 steps</h2>
          <p className="text-gray-400 mb-16">No account required from us. Use your own IPTV provider.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Download the app', desc: 'Install Galya Player from Google Play Store for free.' },
              { step: '02', title: 'Enter your credentials', desc: 'Add your Xtream API server URL, username, and password — or paste your M3U link.' },
              { step: '03', title: 'Start watching', desc: 'Browse live TV, movies, and series from your provider instantly.' },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="text-6xl font-black text-white/5 mb-4">{s.step}</div>
                <div className="absolute top-3 left-1/2 -translate-x-1/2">
                  <div className="w-8 h-8 bg-primary/20 border border-primary/40 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {parseInt(s.step)}
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black pointer-events-none" />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
            Ready to watch?
          </h2>
          <p className="text-gray-400 mb-10">
            Download Galya Player and connect your IPTV subscription today.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.galyaplayer.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.32.18.68.24 1.05.19l11.89-11.89-3.03-3.03L3.18 23.76zM21.4 10.6l-2.62-1.5-3.37 3.37 3.37 3.38 2.64-1.51c.75-.43.75-1.31-.02-1.74zM2.01 1.05C1.98 1.2 2 1.36 2 1.54v20.91c0 .18 0 .35.03.51l11.9-11.9L2.01 1.05zM13.1 12.06l3.04-3.04L4.23.28C3.87.08 3.5.03 3.18.19l9.92 11.87z" />
            </svg>
            Get it on Google Play
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white font-black text-xs">G</div>
            <span>Galya Player</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p>© {new Date().getFullYear()} Galya Player. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
