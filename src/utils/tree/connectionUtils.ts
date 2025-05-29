import { Person } from "@/types/person";

export interface ConnectionPoint {
  x: number;
  y: number;
  id: string;
}

export interface Connection {
  from: ConnectionPoint;
  to: ConnectionPoint;
  type: "parent-child" | "spouse";
}

export const calculateConnections = (persons: Person[]): Connection[] => {
  const connections: Connection[] = [];

  persons.forEach((person) => {
    if (!person.x || !person.y) return;

    const fromPoint: ConnectionPoint = {
      x: person.x,
      y: person.y,
      id: person.id,
    };

    // Связи с детьми
    if (person.childrenIds?.length) {
      person.childrenIds.forEach((childId) => {
        const child = persons.find((p) => p.id === childId);
        if (child?.x && child?.y) {
          connections.push({
            from: fromPoint,
            to: { x: child.x, y: child.y, id: child.id },
            type: "parent-child",
          });
        }
      });
    }

    // Связи с супругами
    if (person.spouseIds?.length) {
      person.spouseIds.forEach((spouseId) => {
        const spouse = persons.find((p) => p.id === spouseId);
        if (spouse?.x && spouse?.y) {
          connections.push({
            from: fromPoint,
            to: { x: spouse.x, y: spouse.y, id: spouse.id },
            type: "spouse",
          });
        }
      });
    }
  });

  return connections;
};

export const getConnectionPadding = (scale: number): number => 48 * scale;

export const createGradient = (
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  type: "parent-child" | "spouse",
): CanvasGradient => {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);

  if (type === "parent-child") {
    gradient.addColorStop(0, "#8B5CF6");
    gradient.addColorStop(0.5, "#A855F7");
    gradient.addColorStop(1, "#9333EA");
  } else {
    gradient.addColorStop(0, "#EC4899");
    gradient.addColorStop(0.5, "#F97316");
    gradient.addColorStop(1, "#EF4444");
  }

  return gradient;
};
