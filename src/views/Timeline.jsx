'use client';

import React, { useState } from "react";
import { Clock } from "lucide-react";
import TimelineItem from "@/components/timeline/TimelineItem";
import { useLanguage } from "@/context/LanguageContext";

const ERA_YEARS = {
  celtic: "500 BC – 43 AD",
  roman: "43 – 410 AD",
  medieval: "1000 – 1400",
  tudor: "1485 – 1603",
  industrial: "1760 – 1900",
  modern: "1900 – Present",
};

const ERA_ICONS = {
  celtic: ["Boudicca", "Caratacus"],
  roman: ["Magnus Maximus"],
  medieval: ["Llywelyn the Great", "Owain Glyndŵr"],
  tudor: ["Henry VII", "William Morgan"],
  industrial: ["Lady Llanover", "Robert Owen"],
  modern: ["David Lloyd George", "Aneurin Bevan"],
};

const ERA_DESCRIPTIONS_EN = {
  celtic: "The era of druids, hill forts, and fierce tribal warriors. Celtic culture laid the foundation for Welsh identity with rich oral traditions, intricate metalwork, and a deep connection to the land.",
  roman: "Roman legions brought roads, forts, and new technologies to Wales. The clash between Roman order and Celtic spirit created a unique cultural fusion that persisted for centuries.",
  medieval: "The golden age of Welsh princes, mighty castles, and epic conflicts. From Llywelyn the Great's unification to Owain Glyndŵr's last great rebellion for independence.",
  tudor: "Henry Tudor's victory at Bosworth placed a Welsh dynasty on the English throne. This era saw the Acts of Union and a transformation of Welsh law, language, and governance.",
  industrial: "Coal and iron transformed the Welsh landscape. Valleys echoed with industry as workers built the engine of the British Empire while forging a new identity through chapel, choir, and rugby.",
  modern: "From world wars to devolution, modern Wales has fought to preserve its language and culture while embracing change. The Senedd now stands as a symbol of Welsh self-governance.",
};

const ERA_DESCRIPTIONS_CY = {
  celtic: "Cyfnod y derwyddon, caerau bryn, a rhyfelwyr llwythol ffyrnig. Gosododd diwylliant Celtaidd sylfaen hunaniaeth Cymreig gyda thraddodiadau llafar cyfoethog, gwaith metel cymhleth, a chysylltiad dwfn â'r tir.",
  roman: "Daeth llengoedd Rhufeinig â ffyrdd, caerau, a thechnolegau newydd i Gymru. Creodd gwrthdrawiad trefn Rufeinig ac ysbryd Celtaidd ymasiad diwylliannol unigryw a barhaodd am ganrifoedd.",
  medieval: "Oes aur tywysogion Cymru, cestyll nerthol, a gwrthdaro epig. O uno Llywelyn Fawr i wrthryfel mawr olaf Owain Glyndŵr dros annibyniaeth.",
  tudor: "Gosododd buddugoliaeth Harri Tudur yn Bosworth frenhinllin Gymreig ar orsedd Lloegr. Gwelwyd yn yr oes hon Ddeddfau Uno a thrawsnewid cyfraith, iaith, a llywodraethiant Cymru.",
  industrial: "Newidiodd glo a haearn dirwedd Cymru. Atseiniodd y cymoedd â diwydiant wrth i weithwyr adeiladu peiriant yr Ymerodraeth Brydeinig gan ffurfio hunaniaeth newydd drwy gapel, côr, a rygbi.",
  modern: "O'r rhyfeloedd byd i ddatganoli, mae Cymru fodern wedi ymladd i gadw ei hiaith a'i diwylliant tra'n cofleidio newid. Mae'r Senedd bellach yn sefyll fel symbol o hunanlywodraethiant Cymru.",
};

export default function Timeline() {
  const [activeEra, setActiveEra] = useState(null);
  const { t, lang } = useLanguage();

  const descriptions = lang === 'cy' ? ERA_DESCRIPTIONS_CY : ERA_DESCRIPTIONS_EN;

  const ERAS = Object.keys(ERA_YEARS).map((id) => ({
    id,
    name: t.eras.names[id],
    years: ERA_YEARS[id],
    description: descriptions[id],
    icons: ERA_ICONS[id],
  }));

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: "var(--app-surface)", border: "1px solid var(--app-border)" }}
          >
            <Clock className="w-4 h-4 text-[#D4A843]" />
            <span className="text-xs tracking-widest uppercase" style={{ color: "var(--app-text-muted)" }}>
              {t.timeline.tag}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "var(--app-text)" }}>
            {t.timeline.heading.split(" ").map((word, i, arr) =>
              i === arr.length - 1 || i === arr.length - 2 ? (
                <span key={i} className="text-[#D4A843]">{word} </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base" style={{ color: "var(--app-text-muted)" }}>
            {t.timeline.subheading}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {ERAS.map((era, idx) => (
            <TimelineItem
              key={era.id}
              era={era}
              index={idx}
              isActive={activeEra === era.id}
              onClick={(e) => setActiveEra(activeEra === e.id ? null : e.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
