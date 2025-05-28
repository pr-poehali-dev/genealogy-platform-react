import { Person } from "@/types/person";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface PersonFamilyInfoProps {
  formData: Person;
  onSelectChange: (name: string, value: string) => void;
}

const PersonFamilyInfo = ({
  formData,
  onSelectChange,
}: PersonFamilyInfoProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Семейные связи</h3>

      <div>
        <Label>Поколение</Label>
        <Select
          value={formData.generation?.toString() || "0"}
          onValueChange={(value) => onSelectChange("generation", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Выберите поколение" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Первое поколение</SelectItem>
            <SelectItem value="1">Второе поколение</SelectItem>
            <SelectItem value="2">Третье поколение</SelectItem>
            <SelectItem value="3">Четвертое поколение</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground mt-1">
          Поколение определяет вертикальное положение персоны в древе
        </p>
      </div>
    </div>
  );
};

export default PersonFamilyInfo;
