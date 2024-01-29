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
    start: "03-21",
    end: "04-19",
  },
  {
    sign: "taurus",
    icon: <IconZodiacTaurus />,
    start: "04-20",
    end: "05-20",
  },
  {
    sign: "gemini",
    icon: <IconZodiacGemini />,
    start: "05-21",
    end: "06-21",
  },
  {
    sign: "cancer",
    icon: <IconZodiacCancer />,
    start: "06-22",
    end: "07-22",
  },
  {
    sign: "leo",
    icon: <IconZodiacLeo />,
    start: "07-23",
    end: "08-22",
  },
  {
    sign: "virgo",
    icon: <IconZodiacVirgo />,
    start: "08-23",
    end: "09-22",
  },
  {
    sign: "libra",
    icon: <IconZodiacLibra />,
    start: "09-23",
    end: "10-23",
  },
  {
    sign: "scorpio",
    icon: <IconZodiacScorpio />,
    start: "10-24",
    end: "11-22",
  },
  {
    sign: "sagittarius",
    icon: <IconZodiacSagittarius />,
    start: "11-23",
    end: "12-21",
  },
  {
    sign: "capricorn",
    icon: <IconZodiacCapricorn />,
    start: "12-22",
    end: "01-19",
  },
  {
    sign: "aquarius",
    icon: <IconZodiacAquarius />,
    start: "01-20",
    end: "02-18",
  },
  {
    sign: "pisces",
    icon: <IconZodiacAquarius />,
    start: "02-19",
    end: "03-20",
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
        <div className="flex items-center mt-6 justify-center gap-4 h-auto flex-wrap">
          {renderAstrologyCard()}
        </div>
      </div>
    </main>
  );
}
