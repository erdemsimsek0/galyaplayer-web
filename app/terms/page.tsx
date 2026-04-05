import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service – Galya Player',
  description: 'Terms of Service for Galya Player IPTV streaming application.',
}

const sections = [
  {
    title: '1. Nature of the Service',
    paragraphs: [
      'Galya Player is a media player application that allows users to stream content using their own media sources and credentials. The app provides technical features such as media playback, playlist management, EPG display, favorites management, and interface customization.',
      'The app is a software tool only. All content visible or played in the app depends on third-party sources added by the user.',
    ],
    bullets: [
      'Does not provide any TV channels, live streams, movies, series, or media content.',
      'Does not sell channel packages, subscriptions, or content memberships.',
      'Is not the owner, operator, or official representative of any third-party streaming provider.',
      'Does not own or operate the URLs, M3U playlists, Xtream credentials, or EPG sources entered by the user.',
    ],
  },
  {
    title: '2. Eligibility',
    paragraphs: [
      'To use Galya Player you must have the legal capacity to enter into binding agreements under applicable law. The app may not be used in violation of the laws of your country or region.',
    ],
  },
  {
    title: '3. User Responsibilities',
    paragraphs: [
      'The user agrees to use the app only for lawful purposes. In particular, the user is obligated to use only media sources to which they have legal access, not to infringe intellectual property rights, and to refrain from conduct that would disrupt the app.',
    ],
    bullets: [
      'Use only media sources to which you have legal access rights.',
      'Do not infringe copyright, neighboring rights, licenses, or broadcast rights.',
      'Ensure the legality of all links and content you add to the app.',
      'Do not use the app for fraud, impersonation, or attacks.',
    ],
  },
  {
    title: '4. Prohibited Uses',
    bullets: [
      'Using pirated, unlicensed, or illegally obtained content.',
      'Using another person\'s username, password, or access credentials without authorization.',
      'Attempting to decompile, reverse-engineer, or copy the application source code.',
      'Attempting to circumvent security measures or the license system.',
      'Using automated bots, scripts, spam, or malware.',
      'Reproducing, bundling, reselling, or commercially distributing the app without a license.',
    ],
  },
  {
    title: '5. Third-Party Sources',
    paragraphs: [
      'Galya Player may work with third-party links and services provided or selected by the user — such as M3U playlists, Xtream Codes logins, EPG links, and remote media files. These sources are not under the control of Galya Player.',
      'Galya Player is not responsible for stream availability, channel list updates, video/audio quality, buffering, credential validity, EPG accuracy, or regional access restrictions imposed by third-party providers.',
    ],
  },
  {
    title: '6. Disclaimer of Warranties',
    paragraphs: [
      'The application is provided "as is" without warranties of any kind, express or implied. We do not guarantee uninterrupted or error-free operation of the app or compatibility with all devices and Android versions.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    paragraphs: [
      'To the maximum extent permitted by applicable law, Galya Player and its developers shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app or inability to access content from third-party sources.',
    ],
  },
  {
    title: '8. Changes to Terms',
    paragraphs: [
      'We may update these Terms of Service from time to time. Continued use of the app after changes constitutes acceptance of the updated terms.',
    ],
  },
  {
    title: '9. Contact',
    bullets: [
      'Brand Name: Galya Player',
      'Email: galyaplayer@gmail.com',
      'Package: com.galyaplayer.app',
    ],
  },
]

export default function TermsPage() {
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
          <div className="text-2xl">📋</div>
          <div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Galya Player is a media player only. It does not provide, sell, or host any content.
              Users are solely responsible for ensuring they have legal rights to access the sources
              they connect to.
            </p>
          </div>
        </div>

        <h1 className="text-3xl font-black mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-12">
          Effective Date: 2026-04-04 &nbsp;·&nbsp; Last Updated: 2026-04-04
        </p>

        <div className="space-y-2 mb-12">
          <p className="text-gray-400 leading-relaxed text-sm">
            These Terms of Service apply to all users of the Galya Player application and related services.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm">
            By downloading, installing, or using the app you confirm that you have read and accepted
            these terms. If you do not agree, do not use the app.
          </p>
        </div>

        <div className="space-y-10">
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
        © {new Date().getFullYear()} Galya Player · <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
      </footer>
    </div>
  )
}
