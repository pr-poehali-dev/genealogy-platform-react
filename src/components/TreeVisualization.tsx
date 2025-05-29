import { Person } from "@/types/person";

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

  // Преобразование реальных данных в узлы
  const realNodes: TreeNode[] = persons.map((person, index) => ({
    id: person.id,
    name: person.firstName || "Без имени",
    x: (index % 3) * 30 + 20,
    y: (person.generation || 0) * 30 + 20,
    generation: person.generation || 0,
    isSelected: person.id === selectedPersonId,
    onClick: () => onSelectPerson?.(person),
  }));

  const nodes = showDemo ? demoNodes : realNodes;
  const connections = showDemo ? demoConnections : [];

  const getNodeStyle = (node: TreeNode) => {
    const baseSize = node.generation === 0 ? "w-20 h-20" : "w-16 h-16";
    const textSize = node.generation === 0 ? "text-sm" : "text-xs";

    let colorClass = "";
    if (node.generation === 0) {
      colorClass = "border-blue-400 bg-blue-50";
    } else if (node.generation === 1) {
      colorClass = "border-rose-400 bg-rose-50";
    } else {
      colorClass = "border-gray-300 bg-gray-50";
    }

    if (node.isSelected) {
      colorClass += " ring-2 ring-primary";
    }

    return `${baseSize} ${textSize} ${colorClass}`;
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* SVG для соединительных линий */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="treeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3e8ff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#e879f9" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {showDemo &&
          connections.map((conn, index) => {
            const fromNode = nodes.find((n) => n.id === conn.from);
            const toNode = nodes.find((n) => n.id === conn.to);

            if (!fromNode || !toNode) return null;

            return (
              <line
                key={index}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke="url(#treeGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            );
          })}
      </svg>

      {/* Узлы древа */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            zIndex: 2,
          }}
        >
          <div
            className={`
              rounded-full border-2 flex items-center justify-center
              cursor-pointer transition-all duration-200
              hover:scale-105 hover:shadow-lg
              ${getNodeStyle(node)}
            `}
            onClick={node.onClick}
          >
            <span className="font-medium text-center px-1 leading-tight">
              {node.name}
            </span>
          </div>
        </div>
      ))}

      {/* Фоновая сетка для демо */}
      {showDemo && (
        <div className="absolute inset-0 opacity-5" style={{ zIndex: 0 }}>
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
        </div>
      )}
    </div>
  );
};

export default TreeVisualization;
