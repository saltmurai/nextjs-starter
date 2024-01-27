import useSWR from "swr";
import { LoadingOverlay } from "@mantine/core";

const fetcher = (url) => fetch(url).then((res) => res.json());

function AstrologyCard({ sign, horoscope, icon }) {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/daily/${sign}`,
    fetcher
  );
  return (
    <div className="relative w-48 h-52 flex flex-col border rounded-md bg-zinc-800 p-2">
      <div className="flex items-center justify-center">{icon}</div>
      <div className="text-center text-xl font-semibold">{sign}</div>
      {isLoading ? (
        <LoadingOverlay visible={isLoading}></LoadingOverlay>
      ) : (
        <div className="text-sm mt-4 line-clamp-4">{data.horoscope}</div>
      )}
    </div>
  );
}

export default AstrologyCard;
