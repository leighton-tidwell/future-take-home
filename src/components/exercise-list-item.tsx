import { Exercise } from "@/types";

export function ExerciseListItem({
  exercise,
  onClick,
}: {
  exercise: Exercise;
  onClick: () => void;
}) {
  return (
    <li
      onClick={onClick}
      className="cursor-pointer px-2 py-1 hover:bg-gray-200 rounded-md"
    >
      {exercise.name}
    </li>
  );
}
