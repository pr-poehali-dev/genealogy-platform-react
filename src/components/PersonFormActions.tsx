import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import Icon from "@/components/ui/icon";

interface PersonFormActionsProps {
  onRemove: () => void;
}

const PersonFormActions = ({ onRemove }: PersonFormActionsProps) => {
  return (
    <div className="flex justify-between pt-4">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" type="button">
            <Icon name="Trash2" className="mr-2 h-4 w-4" />
            Удалить персону
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
            <AlertDialogDescription>
              Это действие нельзя отменить. Персона будет полностью удалена из
              вашего семейного древа.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction onClick={onRemove}>Удалить</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button type="submit">Сохранить изменения</Button>
    </div>
  );
};

export default PersonFormActions;
