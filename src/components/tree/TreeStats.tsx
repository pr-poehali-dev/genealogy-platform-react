import { TreeStats } from "@/types/person";
import Icon from "@/components/ui/icon";

interface TreeStatsProps {
  stats: TreeStats;
}

const TreeStatsComponent = ({ stats }: TreeStatsProps) => {
  return (
    <div className="bg-card rounded-lg p-4 shadow-sm border">
      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <Icon name="BarChart3" size={20} />
        Статистика древа
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Icon name="Users" size={16} className="text-blue-500" />
          <div>
            <div className="font-medium">{stats.totalNodes}</div>
            <div className="text-muted-foreground">Всего узлов</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Icon name="Layers" size={16} className="text-green-500" />
          <div>
            <div className="font-medium">{stats.generations}</div>
            <div className="text-muted-foreground">Поколений</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Icon name="User" size={16} className="text-blue-600" />
          <div>
            <div className="font-medium">{stats.maleCount}</div>
            <div className="text-muted-foreground">Мужской</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Icon name="UserCheck" size={16} className="text-pink-600" />
          <div>
            <div className="font-medium">{stats.femaleCount}</div>
            <div className="text-muted-foreground">Женский</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeStatsComponent;
