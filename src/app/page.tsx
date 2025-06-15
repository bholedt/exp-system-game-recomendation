"use client";
import { useRouter } from "next/navigation";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import FieldWrapper from "@/components/custom/field-wrapper";
import SelectWrapper from "@/components/custom/select-wrapper";
import { Fields, FormData } from "@/lib/type";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const form = useForm<FormData>({
    shouldUnregister: false,
    defaultValues: {
      crossplay: "",
      spesifikasi: "",
      harga: "",
      mode: "",
      genre: "",
    },
  });

  const { control, getValues, trigger, watch } = form;

  const router = useRouter();

  const onSubmit = (data: FormData): void => {
    console.log(data);

    const params = new URLSearchParams(data).toString();
    router.push(`/result?${params}`);
  };

  const formFields: Fields<FormData>[] = [
    {
      label:
        "Apakah game yang anda cari mendukung crossplay di beberapa perangkat game ?",
      name: "crossplay",
      select: {
        placeholder: "Pilih perangkat game",
        label: "Perangkat game",
        items: [
          {
            label: "PC",
            value: "PC",
          },
          {
            label: "Mobile, PC",
            value: "Mobile, PC",
          },
          {
            label: "Konsol, PC",
            value: "Konsol, PC",
          },
          {
            label: "Mobile, Konsol, PC",
            value: "Mobile, Konsol, PC",
          },
        ],
      },
    },
    {
      label:
        "Apakah spesifikasi game yang anda cari termasuk kategori ringan, sedang, atau tinggi ? Sesuaikan dengan spesifikasi perangkat anda.",
      name: "spesifikasi",
      select: {
        placeholder: "Pilih spesifikasi game",
        label: "spesifikasi game",
        items: [
          {
            label: "Ringan",
            value: "Ringan",
          },
          {
            label: "Sedang",
            value: "Sedang",
          },
          {
            label: "Tinggi",
            value: "Tinggi",
          },
        ],
      },
    },
    {
      label: "Apakah game yang anda cari gratis atau berbayar ?",
      name: "harga",
      select: {
        placeholder: "Pilih jenis harga",
        label: "jenis harga",
        items: [
          {
            label: "Gratis",
            value: "Gratis",
          },
          {
            label: "Berbayar",
            value: "Berbayar",
          },
        ],
      },
    },
    {
      label:
        "Apakah game yang anda cari untuk dimainkan sendiri atau bisa dengan beberapa player ?",
      name: "mode",
      select: {
        placeholder: "Pilih mode game",
        label: "Mode Game",
        items: [
          {
            label: "Singleplayer",
            value: "Singleplayer",
          },
          {
            label: "Multiplayer",
            value: "Multiplayer",
          },
        ],
      },
    },
    {
      label: "Genre game apa yang sedang anda cari ?",
      name: "genre",
      select: {
        placeholder: "Pilih genre game",
        label: "Genre game",
        items: [
          {
            label: "Battle Royale",
            value: "Battle Royale",
          },
          {
            label: "Kompetitif",
            value: "Kompetitif",
          },
          {
            label: "Action",
            value: "Action",
          },
        ],
      },
    },
  ];

  const currentField = formFields[currentStep];

  const handleNext = async () => {
    const isValid = await trigger(currentField.name);
    if (!isValid) return;

    if (currentStep < formFields.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const data = getValues();
      onSubmit(data);
    }
  };

  const handleBack = async () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Card className="w-10/12 md:w-3/5 mb-10 mx-auto mt-10">
      <CardHeader>
        <CardTitle>Pilih Kriteria Game Anda!</CardTitle>
        <CardDescription>
          Jawab pertanyaan berikut satu per satu untuk mendapatkan rekomendasi
          game yang sesuai.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form className="p-6 space-y-4">
          <CardContent className="space-y-6">
            {formFields.map((formField, index) => (
              <div
                key={index}
                className={`${index !== currentStep ? "hidden" : ""}`}
              >
                <FieldWrapper
                  control={control}
                  label={formField.label}
                  name={formField.name}
                >
                  {(field) => (
                    <SelectWrapper
                      field={field}
                      items={formField.select.items}
                      label={formField.select.label}
                      placeholder={formField.select.placeholder}
                    />
                  )}
                </FieldWrapper>
              </div>
            ))}
          </CardContent>
          <CardFooter className="p-5 flex flex-row gap-4 justify-end">
            <Button
              type="button"
              onClick={handleBack}
              className="bg-red-600 text-white rounded cursor-pointer"
              disabled={currentStep <= 0}
            >
              Kembali
            </Button>
            <Button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 text-white rounded cursor-pointer"
              disabled={watch(currentField.name) === ""}
            >
              {currentStep === formFields.length - 1
                ? "Cari Rekomendasi"
                : "Lanjut"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
