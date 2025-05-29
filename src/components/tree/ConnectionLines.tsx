import React, { memo, useEffect, useRef } from "react";
import { Person } from "@/types/person";
import { calculateConnections } from "@/utils/tree/connectionUtils";
import { ConnectionRenderer } from "./ConnectionRenderer";

interface ConnectionLinesProps {
  persons: Person[];
  scale: number;
}

const ConnectionLines = memo(({ persons, scale }: ConnectionLinesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !persons.length) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const container = canvas.parentElement;
    if (!container) return;

    // Настройка размеров холста
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    // Очистка холста
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Вычисление связей и отрисовка
    const connections = calculateConnections(persons);
    const renderer = new ConnectionRenderer(ctx, scale);
    renderer.render(connections);
  }, [persons, scale]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
});

ConnectionLines.displayName = "ConnectionLines";

export default ConnectionLines;
