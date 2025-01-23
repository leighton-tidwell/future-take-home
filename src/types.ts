export type Exercise = {
  id: string;
  name: string;
  description?: string | null;
  muscle_groups?: string | null;
  equipment_required?: string | null;
  movement_patterns?: string | null;
  synonyms?: string | null;
  side?: string | null;
  is_alternating?: boolean;
  video?: {
    url: string;
    is_flipped: boolean;
  } | null;
  audio?: {
    url: string;
  } | null;
};

export type Filter = {
  name?: string;
  muscle_groups?: string[];
  equipment_required?: string[];
  movement_patterns?: string[];
};

export type ExercisePrediction = {
  skill_level: {
    level: number;
    max_level: number;
  };
};
