import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amdanom | About Hanes",
  description:
    "Learn about Hanes — the gamified history of Wales platform using augmented reality to revive Welsh heritage.",
};

const pillars = [
  {
    icon: "🏰",
    title: "Reviving Ruined Wales",
    body: "Many of Wales's most significant historical sites have fallen to ruin or been forgotten. Hanes uses augmented reality to digitally rebuild and bring them back to life, letting you walk through Cymru's past.",
  },
  {
    icon: "🗣️",
    title: "The Welsh Language",
    body: "Iaith Gymraeg — the Welsh language — is one of the oldest living languages in Europe. Hanes weaves Welsh words, place names, and phrases throughout every experience, making the language feel vibrant and immediate.",
  },
  {
    icon: "🎮",
    title: "Gamified Learning",
    body: "By turning history into quests, challenges, and XP rewards, Hanes makes Welsh heritage engaging for all ages. Every discovery is a triumph, every quest a step further into Cymru's incredible story.",
  },
  {
    icon: "🔮",
    title: "Augmented Reality",
    body: "Our AR technology overlays digital reconstructions of historical sites onto the real world, letting you experience ruined castles, ancient monuments, and vanished landscapes as they once appeared.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🐉</div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            About <span className="text-[#ffd700]">Hanes</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Hanes — meaning &quot;History&quot; in Welsh — is a gamified
            platform dedicated to reviving the history, language, and culture of
            Wales through immersive augmented reality experiences.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-[#c8102e] mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Wales is a land of extraordinary history — from the ancient
              druids of Ynys Môn to the mighty castles of the medieval princes,
              from the songs of the bards to the industrial revolution that
              changed the world. Yet so much of this heritage lies ruined,
              forgotten, or overlooked.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hanes was born from a simple belief: <strong>history should be felt, not just read</strong>. We
              use augmented reality to digitally resurrect forgotten and ruined
              elements of Cymru&apos;s past, making ancient sites feel vibrant
              and immediate again.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By combining AR with gamified quests, leaderboards, and Welsh
              language integration, Hanes creates a living, breathing experience
              of Welsh heritage for explorers of all ages.
            </p>
          </div>
          <div className="bg-[#c8102e] rounded-3xl p-8 text-white text-center shadow-xl">
            <div className="text-6xl mb-4">🏴󠁧󠁢󠁷󠁬󠁳󠁿</div>
            <blockquote className="text-xl font-bold italic leading-snug">
              &ldquo;Nid yw Cymru ar werth.&rdquo;
            </blockquote>
            <p className="text-red-200 text-sm mt-2">
              &ldquo;Wales is not for sale.&rdquo;
            </p>
            <p className="text-red-200 text-xs mt-4">
              — Famous Welsh protest slogan
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-[#1a1a2e] text-center mb-10">
            The Four Pillars of <span className="text-[#00843d]">Hanes</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#00843d] transition-all"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#00843d] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">
            Join the <span className="text-[#ffd700]">Hanes</span> Community
          </h2>
          <p className="text-green-100 mb-8">
            Start your Welsh history journey today. Earn XP, discover ancient
            sites, and help keep the story of Cymru alive.
          </p>
          <Link
            href="/challenges"
            className="inline-flex items-center gap-2 bg-[#ffd700] text-[#1a1a2e] font-bold px-8 py-3 rounded-full text-base hover:bg-yellow-300 transition-colors shadow-lg"
          >
            ⚔️ Begin Your Quest
          </Link>
        </div>
      </section>
    </>
  );
}
