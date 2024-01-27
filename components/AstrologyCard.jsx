function AstrologyCard({ sign, horoscope, icon }) {
  return (
    <div className="w-48 h-52 flex flex-col border rounded-md bg-zinc-800 p-2">
      <div className="flex items-center justify-center">{icon}</div>
      <div className="text-center text-xl font-semibold">{sign}</div>
      <div className="text-sm mt-4 line-clamp-4">{horoscope}</div>
    </div>
  );
}

export default AstrologyCard;
