import React, { Suspense } from "react";
import ResultPageContent from "./ResultPageContent";

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Memuat hasil...</div>}>
      <ResultPageContent />
    </Suspense>
  );
}
