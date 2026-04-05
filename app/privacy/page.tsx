import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy – Galya Player',
  description: 'Privacy Policy for Galya Player IPTV streaming application.',
}

const sections = [
  {
    title: '1. Data We Process',
    bullets: [
      'Server URL, username, and password entered by the user for Xtream login.',
      'Playlist name and M3U URL entered by the user for M3U login.',
      'Profile name, profile settings, kids mode selection, and related local profile data.',
      'Search history, watch history, favorites, hidden categories, and player preferences.',
      'Download status, local file paths, and progress information for downloads started by the user.',
    ],
  },
  {
    title: '2. Why We Use Data',
    bullets: [
      'To connect to the playlist or account selected by the user.',
      'To list and play live TV, movies, and series.',
      'To preserve profile-based sessions, favorites, history, and preferences.',
      'To support app features such as downloads, subtitles, cast, and Picture in Picture.',
      'To maintain core app stability and functionality.',
    ],
  },
  {
    title: '3. Local Storage and Retention',
    paragraphs: [
      'In the current app architecture, some session and preference data provided by the user may be stored locally on the device. Downloaded media files are also saved on the device when the user starts a download.',
      'Galya Player communicates with IPTV or media sources selected by the user in order to authenticate and load content. Those services may apply their own privacy practices.',
    ],
  },
  {
    title: '4. Data Sharing',
    paragraphs: [
      'The app is not designed to share user data with advertising networks or general-purpose analytics SDKs.',
      'Account credentials and media links entered by the user are used solely to communicate with the remote services the user chooses to access.',
    ],
  },
  {
    title: '5. Permissions',
    bullets: [
      'Internet and network permissions: to access playlists and media sources.',
      'Notification and foreground-service permissions: to show ongoing downloads.',
      'Microphone permission: for voice search features.',
      'Bluetooth permission: for cast and nearby playback device interaction.',
    ],
  },
  {
    title: '6. User Controls',
    bullets: [
      'Users can remove profiles, history, search history, and certain local app data from within the app.',
      'Users can change or remove login accounts they added.',
      'Users can delete downloaded content and related files.',
    ],
  },
  {
    title: '7. Children\'s Privacy',
    paragraphs: [
      'Galya Player is a general-purpose media player and is not designed as a standalone service for children. Features such as kids profiles may be offered only to help parents manage access.',
    ],
  },
  {
    title: '8. Contact',
    bullets: [
      'Brand Name: Galya Player',
      'Email: support@galyaplayer.com',
      'Package: com.galyaplayer.app',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="border-b border-white/5 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded flex items-center justify-center text-white font-black text-xs">G</div>
            <span className="font-bold">Galya Player</span>
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            ← Back to home
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="bg-surface border border-white/10 rounded-2xl p-6 mb-10 flex items-start gap-4">
          <div className="text-2xl">🛡️</div>
          <div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Galya Player may store account and playback-related data provided by the user on the device
              in order to operate core app features. The app does not provide content and processes data
              only to work with sources selected by the user.
            </p>
          </div>
        </div>

        <h1 className="text-3xl font-black mb-2">Galya Player Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">
          Effective Date: 2026-04-04 &nbsp;·&nbsp; Last Updated: 2026-04-04
        </p>

        <div className="prose prose-invert max-w-none space-y-2">
          <p className="text-gray-400 leading-relaxed">
            This Privacy Policy explains what data may be processed when users use Galya Player, why that
            data is used, and what controls users have over their data.
          </p>
          <p className="text-gray-400 leading-relaxed">
            The app is a media player. Accounts, M3U links, and stream sources added by the user remain
            under the user's control and are used only to provide playback, listing, and related app features.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold mb-4 text-white">{s.title}</h2>
              {s.paragraphs?.map((p, i) => (
                <p key={i} className="text-gray-400 text-sm leading-relaxed mb-3">{p}</p>
              ))}
              {s.bullets && (
                <ul className="space-y-2 mt-2">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/5 py-8 px-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Galya Player · <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
      </footer>
    </div>
  )
}
