import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Filter } from "@/types";
import { TextInput } from "./ui/text-input";
import { Button } from "./ui/button";
import { ClearIcon } from "./icons/clear";
import { FilterSection } from "./filter-section";

export function FilterPane({
  muscleGroups,
  equipmentRequired,
  movementPatterns,
}: {
  muscleGroups: string[];
  equipmentRequired: string[];
  movementPatterns: string[];
}) {
  const router = useRouter();
  const params = useSearchParams();

  const [openFilters, setOpenFilters] = useState({
    muscle_groups: false,
    equipment_required: false,
    movement_patterns: false,
  });

  const [filters, setFilters] = useState<Filter>({
    name: params.get("name") ?? undefined,
    muscle_groups: params.get("muscle_groups")?.split(",") ?? undefined,
    equipment_required:
      params.get("equipment_required")?.split(",") ?? undefined,
    movement_patterns: params.get("movement_patterns")?.split(",") ?? undefined,
  });

  const handleFilterChange = (
    key: keyof typeof filters,
    value: string | string[]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApplyFilters = () => {
    const currentParams = new URLSearchParams(params);

    if (params.get("exerciseId")) {
      currentParams.set("exerciseId", params.get("exerciseId") ?? "");
    }

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== "" && Array.isArray(value)) {
        currentParams.set(key, value.join(","));
      } else if (value === "" || value === undefined) {
        currentParams.delete(key);
      } else {
        currentParams.set(key, value);
      }
    });

    router.push(`/?${currentParams.toString()}`);
  };

  const handleClearFilters = () => {
    setFilters({});
    if (params.get("exerciseId")) {
      router.push(`/?exerciseId=${params.get("exerciseId")}`);
    } else {
      router.push("/");
    }
  };

  const handleToggleFilterVisibility = (key: keyof typeof openFilters) => {
    setOpenFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col gap-2 border border-gray-300 rounded-md p-2 bg-white">
      <div className="flex flex-row justify-between items-center">
        <h4 className="text-sm font-bold">Filters</h4>
        <Button onClick={handleClearFilters} color="red" size="sm">
          <ClearIcon size="sm" />
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <FilterSection
          title="Muscle Groups"
          open={openFilters.muscle_groups}
          onToggle={() => handleToggleFilterVisibility("muscle_groups")}
          options={muscleGroups}
          checkedItems={filters.muscle_groups ?? []}
          onChange={(checkedItems) =>
            handleFilterChange("muscle_groups", checkedItems)
          }
        />

        <FilterSection
          title="Equipment Required"
          open={openFilters.equipment_required}
          onToggle={() => handleToggleFilterVisibility("equipment_required")}
          options={equipmentRequired}
          checkedItems={filters.equipment_required ?? []}
          onChange={(checkedItems) =>
            handleFilterChange("equipment_required", checkedItems)
          }
        />

        <FilterSection
          title="Movement Patterns"
          open={openFilters.movement_patterns}
          onToggle={() => handleToggleFilterVisibility("movement_patterns")}
          options={movementPatterns}
          checkedItems={filters.movement_patterns ?? []}
          onChange={(checkedItems) =>
            handleFilterChange("movement_patterns", checkedItems)
          }
        />

        <TextInput
          value={filters.name ?? ""}
          onChange={(value) => handleFilterChange("name", value)}
          placeholder="Search exercises..."
          size="sm"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleApplyFilters();
            }
          }}
        />
      </div>
      <Button onClick={handleApplyFilters} size="sm">
        Apply
      </Button>
    </div>
  );
}
