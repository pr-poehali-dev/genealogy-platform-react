import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Person } from "@/types/person";

interface PersonPreviewProps {
  person: Person;
}

const PersonPreview = ({ person }: PersonPreviewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Предпросмотр</CardTitle>
        <CardDescription>Информация о персоне</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center mb-4">
          <div className="w-24 h-24 rounded-full bg-secondary/20 mb-2 flex items-center justify-center overflow-hidden">
            {person.photoUrl ? (
              <img
                src={person.photoUrl}
                alt={person.name || "Фото"}
                className="w-full h-full object-cover"
              />
            ) : (
              <Icon
                name="User"
                size={40}
                className="text-muted-foreground/50"
              />
            )}
          </div>
          <h3 className="font-medium">{person.name || "Без имени"}</h3>
        </div>

        <div className="space-y-2 text-sm">
          {person.birthYear && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Год рождения:</span>
              <span>{person.birthYear}</span>
            </div>
          )}
          {person.deathYear && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Год смерти:</span>
              <span>{person.deathYear}</span>
            </div>
          )}
          {person.location && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Место:</span>
              <span>{person.location}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonPreview;
