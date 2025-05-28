// Обезличенный тип для узла семейного древа
export interface TreeNode {
  id: string;

  // Базовая структура без персональных данных
  nodeType: "person" | "placeholder" | "unknown";
  gender?: "male" | "female" | "unknown";
  generation: number;

  // Связи в древе (только структура)
  parentIds: string[];
  childrenIds: string[];
  spouseIds: string[];

  // Позиция на канве
  x: number;
  y: number;

  // Визуальные метки вместо персональных данных
  label?: string; // "П1", "М2", "Д1" и т.д.
  isSelected?: boolean;
  isHighlighted?: boolean;
}

// Тип для всего древа
export interface FamilyTree {
  id: string;
  name: string;
  nodes: TreeNode[];
  createdAt: Date;
  updatedAt: Date;
}

// Статистика древа
export interface TreeStats {
  totalNodes: number;
  generations: number;
  maleCount: number;
  femaleCount: number;
  unknownCount: number;
}
