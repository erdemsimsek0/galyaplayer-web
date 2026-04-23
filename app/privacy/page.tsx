import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Galya Player',
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
    title: '4. Data Sharing and Advertising',
    paragraphs: [
      'Account credentials and media links entered by the user are used solely to communicate with the remote services the user chooses to access.',
      "The app uses Google AdMob to display advertisements. AdMob may collect device identifiers and usage data to serve ads. This data is processed by Google in accordance with Google's Privacy Policy (https://policies.google.com/privacy). Users can opt out of personalized ads through their device settings.",
      'No other user data is shared with third-party advertising networks or general-purpose analytics SDKs.',
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
    title: '6. User Controls and Data Deletion',
    bullets: [
      'Users can remove profiles, history, search history, and certain local app data from within the app.',
      'Users can change or remove login accounts they added.',
      'Users can delete downloaded content and related files.',
      'Galya Player does not store user data on its own servers. All data is kept on the device only. Uninstalling the app permanently removes all locally stored app data.',
    ],
  },
  {
    title: "7. Children's Privacy",
    paragraphs: [
      'Galya Player is a general-purpose media player and is not designed as a standalone service for children. Features such as kids profiles may be offered only to help parents manage access.',
    ],
  },
  {
    title: '8. Contact',
    bullets: [
      'Brand Name: Galya Player',
      'Email: galyaplayer@gmail.com',
      'Package: com.galyaplayer.app',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="border-b border-white/5 px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-primary text-xs font-black text-white">G</div>
            <span className="font-bold">Galya Player</span>
          </Link>
          <Link href="/" className="text-sm text-gray-400 transition-colors hover:text-white">
            Back to home
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10 flex items-start gap-4 rounded-2xl border border-white/10 bg-surface p-6">
          <div className="text-lg font-bold text-primary">DATA</div>
          <div>
            <p className="text-sm leading-relaxed text-gray-400">
              Galya Player may store account and playback-related data provided by the user on the device
              in order to operate core app features. The app does not provide content and processes data
              only to work with sources selected by the user.
            </p>
          </div>
        </div>

        <h1 className="mb-2 text-3xl font-black">Galya Player Privacy Policy</h1>
        <p className="mb-12 text-sm text-gray-500">
          Effective Date: 2026-04-04 | Last Updated: 2026-04-23
        </p>

        <div className="space-y-2">
          <p className="leading-relaxed text-gray-400">
            This Privacy Policy explains what data may be processed when users use Galya Player, why that
            data is used, and what controls users have over their data.
          </p>
          <p className="leading-relaxed text-gray-400">
            The app is a media player. Accounts, M3U links, and stream sources added by the user remain
            under the user's control and are used only to provide playback, listing, and related app features.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 text-lg font-bold text-white">{section.title}</h2>
              {section.paragraphs?.map((paragraph, index) => (
                <p key={index} className="mb-3 text-sm leading-relaxed text-gray-400">{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="mt-2 space-y-2">
                  {section.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="mt-0.5 text-primary">-</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Galya Player | <Link href="/terms" className="transition-colors hover:text-white">Terms of Service</Link>
      </footer>
    </div>
  )
}
