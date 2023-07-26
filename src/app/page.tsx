import { ItemText } from "@/components/BannerMovie";
import { IconMovie } from "@/components/Icons";
import PrecodeScrapper from "@/components/PrecodeScrapper";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="container py-8">
      <ItemText
        title={<h1 className="text-2xl font-bold">Data Scraper </h1>}
        icon={<IconMovie />}
        value={<span>Cinerama and TMDB</span>}
      />
      <Suspense
        fallback={
          <pre
            className="
    bg-[#ececec]
    p-4
    overflow-auto
    rounded-lg 
  "
          >
            Loading JSON Scraper
          </pre>
        }
      >
        <PrecodeScrapper />
      </Suspense>
    </main>
  );
}
