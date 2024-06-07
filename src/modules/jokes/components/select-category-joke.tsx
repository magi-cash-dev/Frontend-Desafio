import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

type CategorySelectProps = {
  onChange: (value: string) => void;
  value: string | undefined;
};

export function SelectCategoryJoke(props: CategorySelectProps) {
  const { onChange, value } = props;

  return (
    <div>
      <Select value={value} onValueChange={(event) => onChange(event)}>
        <SelectTrigger>
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent className="h-[180px]">
          {categories.map((category) => {
            return (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
