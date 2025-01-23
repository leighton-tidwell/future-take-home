import type { ExercisePrediction } from "@/types";

export function ExercisePrediction({
  prediction,
}: {
  prediction: ExercisePrediction;
}) {
  return (
    <div className="flex flex-row gap-2">
      <div className="text-md">Skill Level:</div>
      <div className="text-md w-1/3 bg-gray-100 rounded-md p-2 flex flex-row gap-2">
        {Array.from({ length: prediction.skill_level.max_level }).map(
          (_, index) => (
            <div
              key={index}
              className={`h-2 w-1/3 ${
                index < prediction.skill_level.level
                  ? "bg-blue-500"
                  : "bg-gray-500"
              }`}
            />
          )
        )}
      </div>
    </div>
  );
}
