// lib/expertSystem.ts
import { rules } from "../_data/rules";
import { Condition, Result, Rule } from "./type";

export function getRecommendations(facts: Condition): Result[] {
  const countScore = (
    rule: Rule
  ): { matchedFacts: string[]; score: number } => {
    let score = 0;
    const matchedFacts = [];
    if (facts.crossplay === rule.conditions.crossplay) {
      matchedFacts.push(facts.crossplay);
      score++;
    }
    if (facts.spesifikasi === rule.conditions.spesifikasi) {
      matchedFacts.push(facts.spesifikasi);
      score++;
    }
    if (facts.harga === rule.conditions.harga) {
      matchedFacts.push(facts.harga);
      score++;
    }
    if (facts.mode === rule.conditions.mode) {
      matchedFacts.push(facts.mode);
      score++;
    }
    if (facts.genre === rule.conditions.genre) {
      matchedFacts.push(facts.genre);
      score++;
    }

    const matched = {
      matchedFacts,
      score,
    };

    return matched;
  };

  const result: Result[] = rules.map((rule) => ({
    result: rule.result,
    matched: countScore(rule),
  }));

  return result
    .filter((item) => item.matched.score > 0)
    .sort((a, b) => b.matched.score - a.matched.score);
}
