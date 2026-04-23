import Link from 'next/link'
import Script from 'next/script'

const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.galyaplayer.app'
const microsoftStoreUrl = 'https://apps.microsoft.com/detail/9pdhp78c6vbv?hl=en-US&gl=SA'

const features = [
  {
    icon: 'TV',
    title: 'Live TV',
    desc: 'Watch thousands of live channels in HD quality with low-latency playback.',
  },
  {
    icon: 'VOD',
    title: 'Movies & Series',
    desc: 'Browse and stream your VOD library with movies and full series in one place.',
  },
  {
    icon: 'DL',
    title: 'Downloads',
    desc: 'Download content for offline viewing with background progress notifications.',
  },
  {
    icon: 'MIC',
    title: 'Voice Search',
    desc: 'Find channels, movies, and series instantly with built-in voice search.',
  },
  {
    icon: 'CAST',
    title: 'Cast Support',
    desc: 'Stream to your TV with Google Cast and switch playback in one tap.',
  },
  {
    icon: 'PRO',
    title: 'Multiple Profiles',
    desc: 'Create separate profiles for family members, including a kids mode.',
  },
  {
    icon: 'PIP',
    title: 'Picture in Picture',
    desc: 'Keep watching while browsing with PiP mode always on screen.',
  },
  {
    icon: 'SEC',
    title: 'Secure Storage',
    desc: 'Your credentials stay securely stored on your device using encrypted storage.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Script
        type="module"
        src="https://get.microsoft.com/badge/ms-store-badge.bundled.js"
        strategy="afterInteractive"
      />

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-black text-white">G</div>
            <span className="text-lg font-bold tracking-tight">Galya Player</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#features" className="transition-colors hover:text-white">Features</a>
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pb-24 pt-32 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-4 py-1.5 text-xs text-gray-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            Available on Google Play and Microsoft Store
          </div>

          <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Your IPTV, <span className="text-primary">your way.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Galya Player is a powerful IPTV streaming app for Android and Windows. Connect your
            own Xtream or M3U subscription and enjoy live TV, movies, and series in one fast,
            polished player.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
              className="inline-flex items-center justify-center"
            >
              <img
                src="/badges/google-play-en.svg"
                alt="Get it on Google Play"
                className="h-[60px] w-auto"
              />
            </a>
            <div className="flex scale-[0.62] justify-center origin-center">
              <ms-store-badge
                productid="9PDHP78C6VBV"
                productname="Galya IPTV Player"
                window-mode="direct"
                theme="light"
                size="large"
                language="tr-tr"
                animation="on"
              />
            </div>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-4 py-4 font-medium text-gray-400 transition-colors hover:text-white"
            >
              See features
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-primary/10 bg-primary/5 px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-2 text-sm text-gray-400">
          {['Xtream API', 'M3U Playlists', 'HD Playback', 'Google Cast', 'Offline Downloads', 'Voice Search', 'Kids Mode', 'Multi-profile'].map((tag) => (
            <span key={tag} className="flex items-center gap-2">
              <span className="text-primary">+</span> {tag}
            </span>
          ))}
        </div>
      </div>

      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black tracking-tight md:text-4xl">
              Everything you need in one app
            </h2>
            <p className="mx-auto max-w-xl text-gray-400">
              Bring your own IPTV subscription. Galya Player handles the rest on mobile and desktop.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/5 bg-surface p-6 transition-colors hover:border-primary/30"
              >
                <div className="mb-4 inline-flex rounded-md border border-white/10 px-3 py-1 text-xs font-bold tracking-[0.2em] text-gray-300">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-base font-bold transition-colors group-hover:text-primary">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface/30 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tight md:text-4xl">Get started in 3 steps</h2>
          <p className="mb-16 text-gray-400">No account required from us. Use your own IPTV provider.</p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Install the app',
                desc: 'Choose Google Play on Android or Microsoft Store on Windows and install Galya Player.',
              },
              {
                step: '02',
                title: 'Enter your credentials',
                desc: 'Add your Xtream API server URL, username, and password, or paste your M3U link.',
              },
              {
                step: '03',
                title: 'Start watching',
                desc: 'Browse live TV, movies, and series from your provider instantly.',
              },
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="mb-4 text-6xl font-black text-white/5">{step.step}</div>
                <div className="absolute left-1/2 top-3 -translate-x-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary/20 text-sm font-bold text-primary">
                    {parseInt(step.step, 10)}
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-black tracking-tight md:text-5xl">Choose your platform</h2>
          <p className="mb-10 text-gray-400">
            Download Galya Player on Android or Windows and connect your IPTV subscription today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
              className="inline-flex items-center justify-center"
            >
              <img
                src="/badges/google-play-en.svg"
                alt="Get it on Google Play"
                className="h-[60px] w-auto"
              />
            </a>
          </div>
          <div className="mt-6 flex scale-[0.62] justify-center origin-center">
            <ms-store-badge
              productid="9PDHP78C6VBV"
              productname="Galya IPTV Player"
              window-mode="direct"
              theme="light"
              size="large"
              language="tr-tr"
              animation="on"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-gray-500 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-xs font-black text-white">G</div>
            <span>Galya Player</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms of Service</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Galya Player. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
