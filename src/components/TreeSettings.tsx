import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const TreeSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Настройки древа</CardTitle>
        <CardDescription>
          Настройте параметры отображения вашего семейного древа
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="treeName">Название древа</Label>
            <Input id="treeName" placeholder="Моё семейное древо" />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <Button variant="outline">Экспорт данных</Button>
            <Button variant="destructive">Очистить древо</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TreeSettings;
