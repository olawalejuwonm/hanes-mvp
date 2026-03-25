"use client";

import { useState } from "react";
import Link from "next/link";

type Difficulty = "Hawdd" | "Canolig" | "Anodd";

interface Challenge {
  id: number;
  title: string;
  titleCy: string;
  era: string;
  difficulty: Difficulty;
  xp: number;
  icon: string;
  description: string;
  question: string;
  options: string[];
  answer: number;
}

const difficultyColour: Record<Difficulty, string> = {
  Hawdd: "bg-green-100 text-green-700",
  Canolig: "bg-yellow-100 text-yellow-700",
  Anodd: "bg-red-100 text-red-700",
};

const challenges: Challenge[] = [
  {
    id: 1,
    title: "The Last Prince",
    titleCy: "Y Tywysog Olaf",
    era: "Medieval Wales",
    difficulty: "Hawdd",
    xp: 50,
    icon: "👑",
    description:
      "Explore the story of Llywelyn ap Gruffudd, the last native Prince of Wales.",
    question: "Who was the last native Prince of Wales?",
    options: [
      "Owain Glyndŵr",
      "Llywelyn ap Gruffudd",
      "Rhodri Mawr",
      "Hywel Dda",
    ],
    answer: 1,
  },
  {
    id: 2,
    title: "The Red Dragon",
    titleCy: "Y Ddraig Goch",
    era: "Welsh Mythology",
    difficulty: "Hawdd",
    xp: 50,
    icon: "🐉",
    description:
      "Discover the legend of the Red Dragon and its place on the Welsh flag.",
    question:
      "In Welsh mythology, which dragon did the Red Dragon defeat?",
    options: ["A Gold Dragon", "A Blue Dragon", "A White Dragon", "A Black Dragon"],
    answer: 2,
  },
  {
    id: 3,
    title: "Laws of Hywel",
    titleCy: "Cyfraith Hywel",
    era: "Early Medieval",
    difficulty: "Canolig",
    xp: 100,
    icon: "📜",
    description:
      "Hywel Dda codified the laws of Wales in the 10th century — revolutionary for their time.",
    question:
      "Hywel Dda's laws were notable for protecting the rights of which group, unusual for the era?",
    options: ["Merchants", "Women", "Foreigners", "Slaves"],
    answer: 1,
  },
  {
    id: 4,
    title: "Owain Glyndŵr's Revolt",
    titleCy: "Gwrthryfel Owain Glyndŵr",
    era: "Medieval Wales",
    difficulty: "Canolig",
    xp: 100,
    icon: "⚔️",
    description:
      "Owain Glyndŵr led the last great Welsh uprising against English rule in the early 15th century.",
    question: "In which year did Owain Glyndŵr declare himself Prince of Wales?",
    options: ["1385", "1400", "1415", "1455"],
    answer: 1,
  },
  {
    id: 5,
    title: "Stonehenge Origins",
    titleCy: "Tarddiad Côr y Cewri",
    era: "Prehistoric Wales",
    difficulty: "Anodd",
    xp: 200,
    icon: "🗿",
    description:
      "The bluestones of Stonehenge were transported from the Preseli Hills in Wales — a remarkable feat.",
    question: "From which Welsh mountain range did the Stonehenge bluestones originate?",
    options: ["Snowdonia", "The Black Mountains", "The Preseli Hills", "The Brecon Beacons"],
    answer: 2,
  },
  {
    id: 6,
    title: "The Eisteddfod",
    titleCy: "Yr Eisteddfod",
    era: "Welsh Culture",
    difficulty: "Hawdd",
    xp: 50,
    icon: "🎭",
    description:
      "The Eisteddfod is one of the oldest and greatest cultural festivals in Wales.",
    question: "What is the traditional chair awarded at the National Eisteddfod called?",
    options: [
      "Cadair Idris",
      "Y Gadair Wen",
      "Cadair yr Eisteddfod",
      "Y Gadair Ddu",
    ],
    answer: 3,
  },
];

export default function ChallengesPage() {
  const [selected, setSelected] = useState<Challenge | null>(null);
  const [answered, setAnswered] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  function handleAnswer(idx: number) {
    if (answered !== null) return;
    setAnswered(idx);
    if (selected && idx === selected.answer) {
      setScore((s) => s + selected.xp);
    }
  }

  function handleClose() {
    setSelected(null);
    setAnswered(null);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#c8102e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black mb-3">
            Heriau <span className="text-[#ffd700]">Hanes</span>
          </h1>
          <p className="text-red-100 text-lg max-w-xl mx-auto">
            Test your knowledge of Welsh history. Answer correctly to earn XP
            and climb the leaderboard of Cymru&apos;s greatest explorers.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 bg-[#9b0c22] px-6 py-3 rounded-full">
            <span className="text-[#ffd700] font-bold text-lg">
              🏆 {score} XP
            </span>
            <span className="text-red-300 text-sm">earned this session</span>
          </div>
        </div>
      </section>

      {/* Challenges grid */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((c) => (
            <button
              key={c.id}
              onClick={() => { setSelected(c); setAnswered(null); }}
              className="text-left bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#c8102e] transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{c.icon}</span>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${difficultyColour[c.difficulty]}`}
                >
                  {c.difficulty}
                </span>
              </div>
              <h3 className="font-bold text-[#1a1a2e] group-hover:text-[#c8102e] transition-colors">
                {c.title}
              </h3>
              <p className="text-xs text-[#00843d] font-semibold mb-2">
                {c.titleCy}
              </p>
              <p className="text-xs text-gray-400 mb-3">{c.era}</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {c.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-[#ffd700] bg-[#1a1a2e] font-bold px-2 py-1 rounded-full">
                  +{c.xp} XP
                </span>
                <span className="text-xs text-[#c8102e] font-semibold group-hover:underline">
                  Start →
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Quiz Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl">{selected.icon}</span>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-700 text-2xl font-bold leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <h2 className="text-2xl font-black text-[#1a1a2e] mb-1">
              {selected.title}
            </h2>
            <p className="text-sm text-[#00843d] font-semibold mb-4">
              {selected.titleCy} · {selected.era}
            </p>
            <p className="text-gray-600 mb-6">{selected.question}</p>

            <div className="space-y-3">
              {selected.options.map((opt, idx) => {
                let cls =
                  "w-full text-left px-4 py-3 rounded-xl border-2 font-medium transition-colors ";
                if (answered === null) {
                  cls += "border-gray-200 hover:border-[#c8102e] hover:text-[#c8102e]";
                } else if (idx === selected.answer) {
                  cls += "border-[#00843d] bg-green-50 text-[#00843d]";
                } else if (idx === answered) {
                  cls += "border-[#c8102e] bg-red-50 text-[#c8102e]";
                } else {
                  cls += "border-gray-200 text-gray-400";
                }
                return (
                  <button key={idx} className={cls} onClick={() => handleAnswer(idx)}>
                    {opt}
                  </button>
                );
              })}
            </div>

            {answered !== null && (
              <div className="mt-6 text-center">
                {answered === selected.answer ? (
                  <div>
                    <p className="text-[#00843d] font-bold text-lg">
                      🎉 Cywir! Correct!
                    </p>
                    <p className="text-sm text-gray-500">
                      You earned +{selected.xp} XP
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-[#c8102e] font-bold text-lg">
                      ❌ Anghywir! Incorrect
                    </p>
                    <p className="text-sm text-gray-500">
                      The correct answer was:{" "}
                      <strong>{selected.options[selected.answer]}</strong>
                    </p>
                  </div>
                )}
                <button
                  onClick={handleClose}
                  className="mt-4 bg-[#c8102e] text-white font-bold px-6 py-2 rounded-full hover:bg-[#9b0c22] transition-colors"
                >
                  Continue Exploring →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* AR teaser */}
      <section className="bg-[#00843d] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-green-100 mb-4">
            Want to see history in augmented reality?
          </p>
          <Link
            href="/discover"
            className="inline-flex items-center gap-2 bg-[#ffd700] text-[#1a1a2e] font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition-colors"
          >
            🔮 Discover AR Sites
          </Link>
        </div>
      </section>
    </>
  );
}
