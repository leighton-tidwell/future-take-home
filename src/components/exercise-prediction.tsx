import type { ExercisePrediction } from "@/types";

export function ExercisePrediction({
  prediction,
}: {
  prediction: ExercisePrediction;
}) {
  const difficultyLevels = {
    1: {
      label: "Beginner",
      color: "bg-green-500",
    },
    2: {
      label: "Intermediate",
      color: "bg-yellow-500",
    },
    3: {
      label: "Advanced",
      color: "bg-red-500",
    },
  };

  return (
    <div className="flex flex-row gap-2">
      <div className="text-md w-fit bg-gray-100 rounded-md p-2 flex flex-row gap-2">
        {Array.from({ length: prediction.skill_level.max_level }).map(
          (_, index) => {
            const level = (index + 1) as keyof typeof difficultyLevels;
            const isActive = level === prediction.skill_level.level;

            return (
              <div
                key={index}
                className={`h-fit w-fit items-center justify-center flex p-2 rounded-md ${
                  isActive
                    ? difficultyLevels[
                        prediction.skill_level
                          .level as keyof typeof difficultyLevels
                      ].color
                    : "bg-gray-500"
                }`}
              >
                {difficultyLevels[level].label}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
