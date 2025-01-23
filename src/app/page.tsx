import { View } from "@/components/view";
import { fetchExercises } from "@/fetchers/fetch-exercise";
import { Exercise } from "@/types";

export default async function Home() {
  const exercises: Exercise[] = await fetchExercises();

  const sortedExercises = exercises.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="flex flex-col">
      <View exercises={sortedExercises} />
    </div>
  );
}
