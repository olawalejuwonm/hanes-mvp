import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Darganfod | Discover AR Sites – Hanes",
  description:
    "Explore Welsh historical sites through augmented reality. Digitally resurrect castles, monuments, and landscapes of Cymru's past.",
};

const sites = [
  {
    id: 1,
    name: "Caernarfon Castle",
    nameCy: "Castell Caernarfon",
    era: "1283 AD",
    region: "Gwynedd",
    icon: "🏰",
    arReady: true,
    description:
      "One of the mightiest medieval fortresses in Europe, built by Edward I to assert English control over Wales. AR reconstructs its original towers and banners.",
    tags: ["Castle", "Medieval", "Edward I"],
  },
  {
    id: 2,
    name: "Stonehenge Bluestones Origin",
    nameCy: "Tarddiad Cerrig Glas Côr y Cewri",
    era: "3000 BC",
    region: "Preseli Hills, Pembrokeshire",
    icon: "🗿",
    arReady: true,
    description:
      "The bluestones at Stonehenge originated from the Preseli Hills. AR shows the quarrying site and the extraordinary journey of these stones.",
    tags: ["Prehistoric", "Mythology", "Preseli"],
  },
  {
    id: 3,
    name: "Harlech Castle",
    nameCy: "Castell Harlech",
    era: "1289 AD",
    region: "Gwynedd",
    icon: "⚔️",
    arReady: false,
    description:
      "A UNESCO World Heritage Site perched dramatically on a cliff. Scene of the longest siege in British history during the Wars of the Roses.",
    tags: ["Castle", "UNESCO", "Siege"],
  },
  {
    id: 4,
    name: "Sycharth — Owain Glyndŵr's Court",
    nameCy: "Llys Owain Glyndŵr, Sycharth",
    era: "1400 AD",
    region: "Powys",
    icon: "👑",
    arReady: true,
    description:
      "The ruined motte-and-bailey site of Owain Glyndŵr's principal court. AR reconstructs the great hall and brings the last great Welsh revolt to life.",
    tags: ["Medieval", "Owain Glyndŵr", "Revolt"],
  },
  {
    id: 5,
    name: "Ynys Môn — Druids' Isle",
    nameCy: "Ynys Môn — Ynys y Derwyddon",
    era: "60 AD",
    region: "Anglesey",
    icon: "🌿",
    arReady: false,
    description:
      "Anglesey was the heartland of the druids until the Roman invasion of 60 AD. AR reveals the sacred groves and ceremonies of ancient Celtic Wales.",
    tags: ["Celtic", "Druids", "Roman"],
  },
  {
    id: 6,
    name: "Tintern Abbey",
    nameCy: "Abaty Tyndyrn",
    era: "1131 AD",
    region: "Monmouthshire",
    icon: "⛪",
    arReady: true,
    description:
      "The hauntingly beautiful ruins of a Cistercian abbey on the River Wye. AR restores its stained glass windows, choir, and medieval life.",
    tags: ["Abbey", "Cistercian", "Medieval"],
  },
];

export default function DiscoverPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🔮</div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Darganfod <span className="text-[#ffd700]">Cymru</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore Wales&apos;s most significant historical sites — and use
            augmented reality to see them as they once were. Ancient, vibrant,
            and alive.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 bg-[#00843d] px-4 py-2 rounded-full font-medium">
              🟢 AR Ready — live AR experience
            </span>
            <span className="flex items-center gap-2 bg-[#9b0c22] px-4 py-2 rounded-full font-medium">
              🔜 Coming Soon — AR in development
            </span>
          </div>
        </div>
      </section>

      {/* Sites grid */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sites.map((site) => (
            <div
              key={site.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#1a1a2e] transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{site.icon}</span>
                {site.arReady ? (
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700 flex items-center gap-1">
                    🟢 AR Ready
                  </span>
                ) : (
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-500 flex items-center gap-1">
                    🔜 Coming Soon
                  </span>
                )}
              </div>
              <h3 className="font-bold text-[#1a1a2e] text-lg">{site.name}</h3>
              <p className="text-xs text-[#c8102e] font-semibold mb-1">
                {site.nameCy}
              </p>
              <p className="text-xs text-gray-400 mb-3">
                {site.era} · {site.region}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {site.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {site.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {site.arReady && (
                <button className="mt-4 w-full bg-[#1a1a2e] text-white font-bold py-2 rounded-xl text-sm hover:bg-[#00843d] transition-colors">
                  🔮 Launch AR Experience
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* How AR Works */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-[#1a1a2e] text-center mb-10">
            How <span className="text-[#c8102e]">AR</span> Works in Hanes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                step: "1",
                icon: "📍",
                title: "Visit the Site",
                desc: "Travel to a historic Welsh site or explore virtually from anywhere.",
              },
              {
                step: "2",
                icon: "📱",
                title: "Open Hanes AR",
                desc: "Point your device at the site and watch as history is digitally reconstructed around you.",
              },
              {
                step: "3",
                icon: "✨",
                title: "Experience History",
                desc: "Walk through rebuilt halls, see banners fly, hear Welsh voices — history lives again.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-[#c8102e] text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-4">
                  {s.step}
                </div>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-[#1a1a2e] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c8102e] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">
            Ready to play while you explore?
          </h2>
          <p className="text-red-100 mb-6">
            Combine AR discovery with gamified history challenges to earn XP at
            every site.
          </p>
          <Link
            href="/challenges"
            className="inline-flex items-center gap-2 bg-[#ffd700] text-[#1a1a2e] font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors shadow-lg"
          >
            ⚔️ Take on a Challenge
          </Link>
        </div>
      </section>
    </>
  );
}
