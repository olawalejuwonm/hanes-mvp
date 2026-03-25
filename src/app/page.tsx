import Link from "next/link";

const features = [
  {
    icon: "⚔️",
    titleEn: "History Challenges",
    titleCy: "Heriau Hanes",
    descEn:
      "Test your knowledge of Welsh history through gamified quests and earn badges as you uncover the stories of Cymru.",
  },
  {
    icon: "🔮",
    titleEn: "Augmented Reality",
    titleCy: "Realiti Estynedig",
    descEn:
      "Use AR to digitally resurrect ruined castles, ancient monuments, and forgotten landscapes of Wales.",
  },
  {
    icon: "🗣️",
    titleEn: "Welsh Language",
    titleCy: "Iaith Gymraeg",
    descEn:
      "Discover Welsh words, phrases, and place names woven into every experience — the language lives here.",
  },
  {
    icon: "🏆",
    titleEn: "Leaderboards & XP",
    titleCy: "Tablau Sgôr a Phwyntiau",
    descEn:
      "Compete with friends, climb the leaderboard, and earn XP as you journey through the ages of Welsh history.",
  },
  {
    icon: "🗺️",
    titleEn: "Discover Sites",
    titleCy: "Darganfod Safleoedd",
    descEn:
      "Explore an interactive map of Wales's most iconic historical sites, from Caernarfon to the Preseli Hills.",
  },
  {
    icon: "📖",
    titleEn: "Living Stories",
    titleCy: "Straeon Byw",
    descEn:
      "Breathe life into myths, legends, and true events of Welsh history through immersive narrative gameplay.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#c8102e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="text-[20rem] leading-none font-black text-center -mt-20 tracking-tighter">
            🐉
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24 flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 bg-[#9b0c22] text-yellow-200 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            🐉 Croeso i Hanes — Welcome to Hanes
          </div>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight max-w-3xl">
            Revive the History of{" "}
            <span className="text-[#ffd700]">Wales</span>
          </h1>
          <p className="max-w-xl text-lg text-red-100 leading-relaxed">
            Hanes brings the forgotten, ruined, and overlooked stories of Cymru
            back to life — through gamified quests, augmented reality, and the
            beauty of the Welsh language.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/challenges"
              className="bg-[#ffd700] text-[#1a1a2e] font-bold px-8 py-3 rounded-full text-base hover:bg-yellow-300 transition-colors shadow-lg"
            >
              ⚔️ Start Your Quest
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-full text-base hover:bg-white hover:text-[#c8102e] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* Green stripe at bottom — Welsh flag inspired */}
        <div className="h-4 bg-[#00843d]" />
      </section>

      {/* XP Banner */}
      <section className="bg-[#1a1a2e] text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-10 text-center">
          {[
            { value: "500+", label: "Welsh History Quests" },
            { value: "200+", label: "Historic Sites" },
            { value: "50+", label: "AR Experiences" },
            { value: "∞", label: "Stories to Discover" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-black text-[#ffd700]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a2e] mb-3">
            What is <span className="text-[#c8102e]">Hanes</span>?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A gamified journey through Welsh history, language, and culture —
            where every quest brings Cymru&apos;s past back to life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.titleEn}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#c8102e] transition-all group"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-[#1a1a2e] group-hover:text-[#c8102e] transition-colors">
                {f.titleEn}
              </h3>
              <p className="text-xs text-[#00843d] font-semibold mb-2">
                {f.titleCy}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {f.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#00843d] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to explore <span className="text-[#ffd700]">Cymru</span>?
          </h2>
          <p className="text-green-100 mb-8 max-w-lg mx-auto">
            Join thousands of explorers uncovering Welsh history, earning XP,
            and bringing ancient sites back to life.
          </p>
          <Link
            href="/challenges"
            className="inline-flex items-center gap-2 bg-[#ffd700] text-[#1a1a2e] font-bold px-8 py-3 rounded-full text-base hover:bg-yellow-300 transition-colors shadow-lg"
          >
            🗺️ Explore Now — Am Ddim (Free)
          </Link>
        </div>
      </section>
    </>
  );
}
