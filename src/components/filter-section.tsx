import { ChevronDownIcon } from "./icons/chevron-down";
import { ChevronUpIcon } from "./icons/chevron-up";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

export function FilterSection({
  title,
  open,
  onToggle,
  options,
  checkedItems,
  onChange,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  options: string[];
  checkedItems: string[];
  onChange: (checkedItems: string[]) => void;
}) {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <h5 className="text-xs font-semibold">{title}</h5>
        <Button onClick={onToggle} size="sm">
          {open ? <ChevronUpIcon size="sm" /> : <ChevronDownIcon size="sm" />}
        </Button>
      </div>
      {open && (
        <div className="grid grid-cols-2 text-sm">
          {options.map((option) => (
            <div key={option} className="flex flex-row gap-2">
              <Checkbox
                id={option}
                checked={checkedItems.includes(option) ?? false}
                onChange={() => onChange([...checkedItems, option])}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
