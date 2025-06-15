import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";

export type Condition = {
  crossplay: string;
  spesifikasi: string;
  harga: string;
  mode: string;
  genre: string;
};

export type RuleResult = {
  nama_game: string;
  deskripsi: string;
  image: string | StaticImageData;
};

export type Rule = {
  conditions: Condition;
  result: RuleResult;
};

export type FieldWrapperProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  children: (field: ControllerRenderProps<T, Path<T>>) => ReactNode;
};

export type Item = {
  value: string;
  label: string;
};

export type SelectWrapperProps<T extends FieldValues> = {
  field: ControllerRenderProps<T, Path<T>>;
  items: Item[];
  placeholder: string;
  label: string;
};

export type FormData = {
  crossplay: string;
  spesifikasi: string;
  harga: string;
  mode: string;
  genre: string;
};

export type Fields<T extends FieldValues> = {
  label: string;
  name: keyof T;
  select: {
    placeholder: string;
    label: string;
    items: Item[];
  };
};

export type Result = {
  result: RuleResult;
  matched: {
    matchedFacts: string[];
    score: number;
  };
};
