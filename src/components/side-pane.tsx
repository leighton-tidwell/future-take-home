import { Exercise } from "@/types";
import { FilterPane } from "./filter-pane";
import { useRouter, useSearchParams } from "next/navigation";
import { ExerciseListItem } from "./exercise-list-item";

export function SidePane({
  exercises,
  possibleMuscleGroups,
  possibleEquipmentRequired,
  possibleMovementPatterns,
}: {
  exercises: Exercise[];
  possibleMuscleGroups: string[];
  possibleEquipmentRequired: string[];
  possibleMovementPatterns: string[];
}) {
  const router = useRouter();
  const params = useSearchParams();

  const handleSelectExercise = (exerciseId: string) => {
    const currentParams = new URLSearchParams(params);
    currentParams.set("exerciseId", exerciseId);
    router.push(`?${currentParams.toString()}`);
  };

  return (
    /* Using DVH so that this works on mobile */
    <div className="h-dvh overflow-y-auto p-4 flex flex-col gap-4 bg-gray-100">
      <h1 className="text-xl font-bold border-b border-gray-300 pb-2">
        Future Exercises
      </h1>
      <div className="sticky top-0">
        <FilterPane
          muscleGroups={possibleMuscleGroups}
          equipmentRequired={possibleEquipmentRequired}
          movementPatterns={possibleMovementPatterns}
        />
      </div>
      <h2 className="text-lg font-bold">Exercise List</h2>
      <ul>
        {exercises.map((exercise) => (
          <ExerciseListItem
            key={exercise.id}
            exercise={exercise}
            onClick={() => handleSelectExercise(exercise.id)}
          />
        ))}
      </ul>
    </div>
  );
}
