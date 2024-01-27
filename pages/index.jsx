import { Container } from "@mantine/core";
import AstrologyCard from "../components/AstrologyCard";
import Header from "../components/Header";
import {
  IconZodiacAquarius,
  IconZodiacAries,
  IconZodiacCancer,
  IconZodiacCapricorn,
  IconZodiacGemini,
  IconZodiacLeo,
  IconZodiacLibra,
  IconZodiacSagittarius,
  IconZodiacScorpio,
  IconZodiacTaurus,
  IconZodiacVirgo,
} from "@tabler/icons-react";

const starSign = [
  {
    sign: "aries",
    icon: <IconZodiacAries />,
  },
  {
    sign: "taurus",
    icon: <IconZodiacTaurus />,
  },
  {
    sign: "gemini",
    icon: <IconZodiacGemini />,
  },
  {
    sign: "cancer",
    icon: <IconZodiacCancer />,
  },
  {
    sign: "leo",
    icon: <IconZodiacLeo />,
  },
  {
    sign: "virgo",
    icon: <IconZodiacVirgo />,
  },
  {
    sign: "libra",
    icon: <IconZodiacLibra />,
  },
  {
    sign: "scorpio",
    icon: <IconZodiacScorpio />,
  },
  {
    sign: "sagittarius",
    icon: <IconZodiacSagittarius />,
  },
  {
    sign: "capricorn",
    icon: <IconZodiacCapricorn />,
  },
  {
    sign: "aquarius",
    icon: <IconZodiacAquarius />,
  },
  {
    sign: "pisces",
    icon: <IconZodiacAquarius />,
  },
];

export default function IndexPage() {
  function renderAstrologyCard() {
    let list = [];
    starSign.forEach((item) => {
      list.push(
        <AstrologyCard
          key={item.name}
          sign={item.sign}
          icon={item.icon}
          horoscope={item.horoscope}
        />
      );
    });
    return list;
  }

  return (
    <main className="w-full text-white h-screen bg-black">
      {/* Container */}
      <div className="w-4/5 p-4 h-full mx-auto">
        <Header />
        <div className="flex items-center justify-center gap-4 h-auto flex-wrap">
          {renderAstrologyCard()}
        </div>
      </div>
    </main>
  );
}
