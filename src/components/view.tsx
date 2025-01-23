"use client";

import { useMemo } from "react";
import { Exercise } from "@/types";
import { DetailsPane } from "./details-pane";
import { SidePane } from "./side-pane";
import { useSearchParams } from "next/navigation";

export function View({ exercises }: { exercises: Exercise[] }) {
  const params = useSearchParams();

  const selectedExerciseId = params.get("exerciseId");

  const filters = useMemo(
    () => ({
      name: params.get("name"),
      muscle_groups: params.get("muscle_groups"),
      equipment_required: params.get("equipment_required"),
      movement_patterns: params.get("movement_patterns"),
    }),
    [params]
  );

  const filteredExercises = useMemo(() => {
    return exercises.filter((exercise) => {
      let matches = true;

      if (
        filters.name &&
        !exercise.name.toLowerCase().includes(filters.name.toLowerCase())
      )
        matches = false;

      if (
        filters.muscle_groups &&
        (!exercise.muscle_groups ||
          !filters.muscle_groups.includes(exercise.muscle_groups))
      )
        matches = false;

      if (
        filters.equipment_required &&
        (!exercise.equipment_required ||
          !filters.equipment_required.includes(exercise.equipment_required))
      )
        matches = false;

      if (
        filters.movement_patterns &&
        (!exercise.movement_patterns ||
          !filters.movement_patterns.includes(exercise.movement_patterns))
      )
        matches = false;

      return matches;
    });
  }, [exercises, filters]);

  const selectedExercise = useMemo(
    () => exercises.find((exercise) => exercise.id === selectedExerciseId),
    [exercises, selectedExerciseId]
  );

  const possibleMuscleGroups = useMemo(() => {
    const muscleGroups = new Set<string>();

    exercises.forEach((exercise) => {
      if (exercise.muscle_groups) {
        exercise.muscle_groups.split(",").forEach((muscleGroup) => {
          muscleGroups.add(muscleGroup);
        });
      }
    });

    return Array.from(muscleGroups);
  }, [exercises]);

  const possibleEquipmentRequired = useMemo(() => {
    const equipmentRequired = new Set<string>();

    exercises.forEach((exercise) => {
      if (exercise.equipment_required) {
        exercise.equipment_required.split(",").forEach((equipment) => {
          equipmentRequired.add(equipment);
        });
      }
    });

    return Array.from(equipmentRequired);
  }, [exercises]);

  const possibleMovementPatterns = useMemo(() => {
    const movementPatterns = new Set<string>();

    exercises.forEach((exercise) => {
      if (exercise.movement_patterns) {
        exercise.movement_patterns.split(",").forEach((movementPattern) => {
          movementPatterns.add(movementPattern);
        });
      }
    });

    return Array.from(movementPatterns);
  }, [exercises]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <SidePane
        exercises={filteredExercises}
        possibleMuscleGroups={possibleMuscleGroups}
        possibleEquipmentRequired={possibleEquipmentRequired}
        possibleMovementPatterns={possibleMovementPatterns}
      />
      {selectedExercise && <DetailsPane selectedExercise={selectedExercise} />}
    </div>
  );
}
