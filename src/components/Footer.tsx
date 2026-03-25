import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🐉</span>
            <span className="text-xl font-bold text-[#ffd700]">Hanes</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Adfywio hanes Cymru drwy chwarae a thechnoleg — reviving Welsh
            history through play and technology.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-[#ffd700] font-semibold mb-3 uppercase text-xs tracking-wider">
            Llywio
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Cartref
              </Link>
            </li>
            <li>
              <Link
                href="/challenges"
                className="hover:text-white transition-colors"
              >
                Heriau
              </Link>
            </li>
            <li>
              <Link
                href="/discover"
                className="hover:text-white transition-colors"
              >
                Darganfod
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                Amdanom
              </Link>
            </li>
          </ul>
        </div>

        {/* Mission */}
        <div>
          <h3 className="text-[#ffd700] font-semibold mb-3 uppercase text-xs tracking-wider">
            Cenhadaeth
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Bringing Wales&apos;s ancient sites, language, and legends back to
            life through gamified augmented reality experiences.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="inline-block w-4 h-4 rounded-full bg-[#c8102e]" />
            <span className="inline-block w-4 h-4 rounded-full bg-[#00843d]" />
            <span className="inline-block w-4 h-4 rounded-full bg-[#ffd700]" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-gray-700 text-center text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} Hanes Cymru. Wedi&apos;i adeiladu gyda
          ❤️ dros Gymru. | Built with love for Wales.
        </p>
      </div>
    </footer>
  );
}
