"use client";

import { useSearchParams } from "next/navigation";
import { getRecommendations } from "../../lib/inference-engine";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export default function ResultPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [expandedCards, setExpandedCards] = useState<{
    [key: number]: boolean;
  }>({});

  const input = {
    crossplay: searchParams.get("crossplay") || "",
    spesifikasi: searchParams.get("spesifikasi") || "",
    harga: searchParams.get("harga") || "",
    mode: searchParams.get("mode") || "",
    genre: searchParams.get("genre") || "",
  };

  const rekomendasi = getRecommendations(input);

  const topRecommendation = rekomendasi[0];
  const otherRecommendations = rekomendasi.slice(1);

  const toggleReadMore = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-6 space-y-8">
      {rekomendasi.length === 0 ? (
        <p>Tidak ada rekomendasi yang cocok dengan kriteria kamu.</p>
      ) : (
        <>
          {/* Kartu Teratas */}
          <Card className="bg-green-100 text-black max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">
                <h1 className="text-lg">Rekomendasi Game: </h1>
                <h1 className="font-bold">
                  {topRecommendation.result.nama_game} (Skor:{" "}
                  {topRecommendation.matched.score})
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-950">
              <div className="relative h-100">
                <Image
                  src={topRecommendation.result.image}
                  alt={topRecommendation.result.nama_game}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <p className="mt-5">{topRecommendation.result.deskripsi}</p>
              <div className="mt-5 space-x-1 space-y-2">
                <h1 className="font-bold">Kriteria yang sesuai: </h1>
                {topRecommendation.matched.matchedFacts.map(
                  (matchedFact, index) => (
                    <Badge
                      key={index}
                      variant={"secondary"}
                      className="bg-green-950 text-green-100"
                    >
                      {matchedFact}
                    </Badge>
                  )
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="button"
                className="bg-lime-300 text-green-950 hover:bg-lime-500 cursor-pointer"
                onClick={() => router.push("/")}
              >
                Mau cari kriteria lain ?
              </Button>
            </CardFooter>
          </Card>

          {/* Kartu Kecil */}
          <h1 className="text-xl font-bold">Rekomendasi lain: </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {otherRecommendations.map((item, index) => {
              const { nama_game, deskripsi } = item.result;
              const isExpanded = expandedCards[index];
              const shortDesc =
                deskripsi.length > 50 && !isExpanded
                  ? deskripsi.slice(0, 50) + "..."
                  : deskripsi;

              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {nama_game} (Skor: {item.matched.score})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-70">
                      <Image
                        src={item.result.image}
                        alt={item.result.nama_game}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-5">
                      {shortDesc}{" "}
                      {deskripsi.length > 50 && (
                        <span
                          className="text-blue-600 p-0 mt-2 cursor-pointer"
                          onClick={() => toggleReadMore(index)}
                        >
                          {isExpanded ? "Show less" : "Read more"}
                        </span>
                      )}
                    </p>
                    <div className="mt-5 space-x-1 space-y-2">
                      <h1 className="font-bold">Kriteria yang sesuai: </h1>
                      {item.matched.matchedFacts.map((matchedFact, index) => (
                        <Badge
                          key={index}
                          variant={"secondary"}
                          className="bg-green-950 text-green-100"
                        >
                          {matchedFact}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
