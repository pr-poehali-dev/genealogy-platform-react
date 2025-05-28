import { Person } from "@/types/person";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PersonBasicInfoProps {
  formData: Person;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (name: string, value: string) => void;
}

const PersonBasicInfo = ({
  formData,
  onInputChange,
  onNumberChange,
  onSelectChange,
}: PersonBasicInfoProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Имя и Фамилия</Label>
          <Input
            id="name"
            name="name"
            value={formData.name || ""}
            onChange={onInputChange}
            placeholder="Введите имя и фамилию"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="birthYear">Год рождения</Label>
            <Input
              id="birthYear"
              name="birthYear"
              type="number"
              value={formData.birthYear || ""}
              onChange={onNumberChange}
              placeholder="Например, 1980"
            />
          </div>

          <div>
            <Label htmlFor="deathYear">Год смерти</Label>
            <Input
              id="deathYear"
              name="deathYear"
              type="number"
              value={formData.deathYear || ""}
              onChange={onNumberChange}
              placeholder="Оставьте пустым, если жив"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="gender">Пол</Label>
          <RadioGroup
            value={formData.gender || ""}
            onValueChange={(value) =>
              onSelectChange("gender", value as "male" | "female" | "other")
            }
            className="flex gap-4 pt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Мужской</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Женский</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Другой</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="photoUrl">Ссылка на фото</Label>
          <Input
            id="photoUrl"
            name="photoUrl"
            value={formData.photoUrl || ""}
            onChange={onInputChange}
            placeholder="https://example.com/photo.jpg"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="birthplace">Место рождения</Label>
          <Input
            id="birthplace"
            name="birthplace"
            value={formData.birthplace || ""}
            onChange={onInputChange}
            placeholder="Город, страна"
          />
        </div>

        <div>
          <Label htmlFor="location">Место проживания</Label>
          <Input
            id="location"
            name="location"
            value={formData.location || ""}
            onChange={onInputChange}
            placeholder="Текущее место жительства"
          />
        </div>

        <div>
          <Label htmlFor="occupation">Профессия</Label>
          <Input
            id="occupation"
            name="occupation"
            value={formData.occupation || ""}
            onChange={onInputChange}
            placeholder="Род деятельности"
          />
        </div>

        <div>
          <Label htmlFor="bio">Биография</Label>
          <Textarea
            id="bio"
            name="bio"
            value={formData.bio || ""}
            onChange={onInputChange}
            placeholder="Краткая биография или заметки"
            rows={3}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonBasicInfo;
