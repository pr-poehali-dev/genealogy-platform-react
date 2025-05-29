import { TreeNode } from "@/types/person";
import { useState } from "react";
import Icon from "@/components/ui/icon";

interface AnonymousTreeNodeProps {
  node: TreeNode;
  onSelect: (node: TreeNode) => void;
  isSelected?: boolean;
}

const AnonymousTreeNode = ({
  node,
  onSelect,
  isSelected,
}: AnonymousTreeNodeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!node) return null;

  const getNodeIcon = () => {
    if (node.nodeType === "placeholder") return "UserPlus";
    if (node.gender === "male") return "User";
    if (node.gender === "female") return "UserCheck";
    return "Users";
  };

  const getNodeColor = () => {
    if (node.nodeType === "placeholder") {
      return "from-gray-300 via-gray-400 to-gray-500";
    }
    if (node.gender === "male") {
      return "from-blue-400 via-blue-500 to-blue-600";
    } else if (node.gender === "female") {
      return "from-pink-400 via-pink-500 to-pink-600";
    }
    return "from-purple-400 via-purple-500 to-purple-600";
  };

  const getNodeLabel = () => {
    if (node.name) return node.name;
    if (node.firstName) return node.firstName;
    if (node.label) return node.label;

    // Автоматические метки на основе позиции в древе
    const genderPrefix =
      node.gender === "male" ? "М" : node.gender === "female" ? "Ж" : "У";
    return `${genderPrefix}${node.generation || 0}`;
  };

  return (
    <div
      className="flex flex-col items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative cursor-pointer transition-all duration-300 ease-out transform 
          ${isHovered ? "scale-110 -translate-y-1" : "scale-100"} 
          ${isSelected ? "scale-105 shadow-lg" : ""}`}
        onClick={() => onSelect(node)}
        role="button"
        tabIndex={0}
        aria-label={`Выбрать узел ${getNodeLabel()}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onSelect(node);
          }
        }}
      >
        {/* Основной круг узла */}
        <div
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${getNodeColor()} 
            flex items-center justify-center text-white font-bold shadow-md
            ${isSelected ? "ring-4 ring-primary ring-opacity-50" : ""}
            ${isHovered ? "shadow-xl" : ""}
            ${node.nodeType === "placeholder" ? "border-2 border-dashed border-gray-400" : ""}`}
        >
          {node.nodeType === "placeholder" ? (
            <Icon name={getNodeIcon()} size={20} className="text-gray-600" />
          ) : (
            <span className="text-sm">{getNodeLabel()}</span>
          )}
        </div>

        {/* Индикатор связей */}
        {((node.spouseIds?.length || 0) > 0 ||
          (node.childrenIds?.length || 0) > 0) && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <Icon name="Link" size={10} className="text-white" />
          </div>
        )}
      </div>

      {/* Информация о поколении */}
      <div className="mt-2 text-xs text-muted-foreground text-center">
        {node.generation !== undefined && (
          <span>Поколение {node.generation}</span>
        )}
      </div>

      {/* Статистика связей при наведении */}
      {isHovered && (
        <div
          className="absolute top-20 left-1/2 transform -translate-x-1/2 
          bg-black/80 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10"
        >
          <div>Дети: {node.childrenIds?.length || 0}</div>
          <div>Родители: {node.parentIds?.length || 0}</div>
          {(node.spouseIds?.length || 0) > 0 && (
            <div>Партнёры: {node.spouseIds?.length}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default AnonymousTreeNode;
