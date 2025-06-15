import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FieldValues } from "react-hook-form";
import { SelectWrapperProps } from "@/lib/type";

export default function SelectWrapper<T extends FieldValues>({
  field,
  items,
  placeholder,
  label,
}: SelectWrapperProps<T>) {
  return (
    <Select
      value={field.value || ""}
      onValueChange={(value) => {
        field.onChange(value);
      }}
    >
      <SelectTrigger className="w-full cursor-pointer">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
