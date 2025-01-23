"use client";

import useSWR from "swr";
import type {
  Exercise,
  ExercisePrediction as ExercisePredictionType,
} from "@/types";
import { ExercisePrediction } from "./exercise-prediction";
import { fetcher } from "@/fetchers/fetcher";

export function DetailsPane({
  selectedExercise,
}: {
  selectedExercise: Exercise;
}) {
  const { data, isLoading } = useSWR<ExercisePredictionType | null>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${selectedExercise.id}/prediction`,
    fetcher
  );

  return (
    <div className="max-h-dvh overflow-y-auto w-3/4 p-4 gap-4 flex flex-col">
      <div className="flex flex-row gap-2 items-center">
        <h1 className="text-2xl font-bold">{selectedExercise.name}</h1>
        {selectedExercise.audio && (
          <audio
            src={selectedExercise.audio.url}
            controls
            className="w-1/3 h-1/3"
          />
        )}
      </div>
      <p className="text-sm text-gray-500">{selectedExercise.description}</p>
      {selectedExercise.video && (
        <video
          src={selectedExercise.video.url}
          className="w-full h-96 object-fit"
          controls
        />
      )}
      <div className="flex flex-col gap-2">
        {selectedExercise.muscle_groups && (
          <div className="text-sm font-bold">
            Muscle Groups:{" "}
            <span className="font-normal">
              {selectedExercise.muscle_groups}
            </span>
          </div>
        )}

        {selectedExercise.movement_patterns && (
          <div className="text-sm font-bold">
            Movement Patterns:{" "}
            <span className="font-normal">
              {selectedExercise.movement_patterns}
            </span>
          </div>
        )}

        {selectedExercise.equipment_required && (
          <div className="text-sm font-bold">
            Equipment Required:{" "}
            <span className="font-normal">
              {selectedExercise.equipment_required}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        {isLoading && (
          <div className="text-sm text-gray-500">Loading skill level...</div>
        )}
        {data && <ExercisePrediction prediction={data} />}
      </div>
    </div>
  );
}
