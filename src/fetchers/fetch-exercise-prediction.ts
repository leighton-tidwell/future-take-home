import { ExercisePrediction } from "@/types";

export async function fetchExercisePrediction(
  exerciseId: string | null
): Promise<ExercisePrediction | null> {
  if (!exerciseId) return Promise.resolve(null);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${exerciseId}/prediction`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exercise prediction");
  }

  return response.json();
}
