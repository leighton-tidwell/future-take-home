export async function fetchExercises() {
  const response = await fetch(
    "https://candidate.staging.future.co/sandbox/api/exercises"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exercise");
  }

  return response.json();
}
