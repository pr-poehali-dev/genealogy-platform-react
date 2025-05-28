import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface EmptyTreeStateProps {
  onAddPerson: () => void;
}

const EmptyTreeState = ({ onAddPerson }: EmptyTreeStateProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
      <Icon
        name="UsersRound"
        size={60}
        className="text-muted-foreground/30 mb-4"
      />
      <h3 className="text-xl font-medium mb-2">Ваше древо пока пусто</h3>
      <p className="text-muted-foreground max-w-md mb-6">
        Добавьте первую персону, чтобы начать построение семейного древа
      </p>
      <Button onClick={onAddPerson}>
        <Icon name="UserPlus" className="mr-2 h-4 w-4" />
        Добавить первую персону
      </Button>
    </div>
  );
};

export default EmptyTreeState;
