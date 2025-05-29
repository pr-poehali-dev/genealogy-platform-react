import { Person } from "@/types/person";
import AnonymousTreeNode from "@/components/AnonymousTreeNode";

interface TreeNode {
  id: string;
  name: string;
  x: number;
  y: number;
  generation: number;
  isSelected?: boolean;
  onClick?: () => void;
}

interface TreeVisualizationProps {
  persons?: Person[];
  onSelectPerson?: (person: Person) => void;
  selectedPersonId?: string;
  showDemo?: boolean;
  className?: string;
}

const TreeVisualization = ({
  persons = [],
  onSelectPerson,
  selectedPersonId,
  showDemo = false,
  className = "",
}: TreeVisualizationProps) => {
  // Демо данные для главной страницы
  const demoNodes: TreeNode[] = [
    { id: "1", name: "Бабушка", x: 15, y: 15, generation: 2 },
    { id: "2", name: "Дедушка-бабушка", x: 35, y: 15, generation: 2 },
    { id: "3", name: "Дедушка", x: 65, y: 15, generation: 2 },
    { id: "4", name: "Мама", x: 25, y: 45, generation: 1 },
    { id: "5", name: "Папа", x: 55, y: 45, generation: 1 },
    { id: "6", name: "Вы", x: 40, y: 75, generation: 0 },
  ];

  // Соединения для демо
  const demoConnections = [
    { from: "1", to: "4" },
    { from: "2", to: "4" },
    { from: "3", to: "5" },
    { from: "4", to: "6" },
    { from: "5", to: "6" },
  ];

  const realNodes: TreeNode[] = persons.map((person, index) => ({
    id: person.id,
    name: person.name || person.firstName || "Без имени",
    firstName: person.firstName,
    x: person.x || (index % 3) * 200 + 100,
    y: person.y || Math.floor(index / 3) * 150 + 100,
    generation: person.generation || 0,
    gender: person.gender,
    nodeType: "person" as const,
    parentIds: person.parentIds || [],
    childrenIds: person.childrenIds || [],
    spouseIds: person.spouseIds || [],
    isSelected: person.id === selectedPersonId,
    onClick: () => onSelectPerson?.(person),
  }));

  const nodes = showDemo ? demoNodes : realNodes;

  // Линии связей
  const renderConnections = () => {
    if (showDemo) {
      return demoConnections.map((conn, index) => {
        const fromNode = demoNodes.find((n) => n.id === conn.from);
        const toNode = demoNodes.find((n) => n.id === conn.to);
        if (!fromNode || !toNode) return null;

        return (
          <line
            key={index}
            x1={`${fromNode.x}%`}
            y1={`${fromNode.y}%`}
            x2={`${toNode.x}%`}
            y2={`${toNode.y}%`}
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            opacity="0.7"
          />
        );
      });
    }

    return realNodes.flatMap((node) =>
      node.childrenIds.map((childId) => {
        const child = realNodes.find((n) => n.id === childId);
        if (!child) return null;

        return (
          <line
            key={`${node.id}-${childId}`}
            x1={node.x}
            y1={node.y}
            x2={child.x}
            y2={child.y}
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            opacity="0.7"
          />
        );
      }),
    );
  };

  return (
    <div
      className={`relative w-full h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border ${className}`}
    >
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient
            id="connectionGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
        </defs>
        {renderConnections()}
      </svg>

      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: showDemo ? `${node.x}%` : `${node.x}px`,
            top: showDemo ? `${node.y}%` : `${node.y}px`,
          }}
        >
          <AnonymousTreeNode
            node={node}
            onSelect={(selectedNode) => {
              if (selectedNode.onClick) {
                selectedNode.onClick();
              }
            }}
            isSelected={node.isSelected}
          />
        </div>
      ))}
    </div>
  );
};

export default TreeVisualization;
