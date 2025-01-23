import { ExercisePrediction } from "@/types";
import { NextResponse } from "next/server";

// Using a server API route to avoid cors issues and take
// advantage of Next.js caching
export async function GET(
  request: Request,
  { params }: { params: Promise<{ exerciseId: string }> }
) {
  const { exerciseId } = await params;
  const response = await fetch(
    `https://candidate.staging.future.co/sandbox/api/exercises/${exerciseId}/predictions`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exercise prediction");
  }

  const json = (await response.json()) as ExercisePrediction;

  return NextResponse.json({
    skill_level: json.skill_level,
  });
}
