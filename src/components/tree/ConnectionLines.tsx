import React, { memo, useEffect, useRef } from "react";
import { Person } from "@/types/person";

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

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    // Очищаем холст
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Настраиваем качество отрисовки
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Отрисовка связей между узлами
    persons.forEach((person) => {
      if (!person.x || !person.y) return;

      // Рисуем связи с детьми (современные кривые)
      if (person.childrenIds?.length) {
        person.childrenIds.forEach((childId) => {
          const child = persons.find((p) => p.id === childId);
          if (child?.x && child?.y) {
            drawModernConnection(
              ctx,
              person.x,
              person.y,
              child.x,
              child.y,
              "parent-child",
              scale,
            );
          }
        });
      }

      // Рисуем связи с супругами (элегантные дуги)
      if (person.spouseIds?.length) {
        person.spouseIds.forEach((spouseId) => {
          const spouse = persons.find((p) => p.id === spouseId);
          if (spouse?.x && spouse?.y) {
            drawModernConnection(
              ctx,
              person.x,
              person.y,
              spouse.x,
              spouse.y,
              "spouse",
              scale,
            );
          }
        });
      }
    });
  }, [persons, scale]);

  // Современная отрисовка соединений с градиентами и кривыми
  const drawModernConnection = (
    ctx: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    type: "parent-child" | "spouse",
    scale: number,
  ) => {
    const padding = 48 * scale; // Отступ от центра узла

    if (type === "parent-child") {
      // Создаем градиент для родительских связей
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, "#8B5CF6"); // purple-500
      gradient.addColorStop(0.5, "#A855F7"); // purple-500
      gradient.addColorStop(1, "#9333EA"); // purple-600

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3 * scale;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Добавляем тень
      ctx.shadowColor = "rgba(139, 92, 246, 0.3)";
      ctx.shadowBlur = 10 * scale;
      ctx.shadowOffsetY = 2 * scale;

      ctx.beginPath();

      if (Math.abs(y2 - y1) > 80) {
        // Вертикальная S-образная кривая для поколений
        const midY = (y1 + y2) / 2;
        const controlOffset = Math.abs(x2 - x1) * 0.3;

        ctx.moveTo(x1, y1 + padding);
        ctx.bezierCurveTo(
          x1,
          y1 + padding + controlOffset,
          x1,
          midY - controlOffset,
          x1,
          midY,
        );
        ctx.bezierCurveTo(
          x1,
          midY + controlOffset,
          x2,
          midY - controlOffset,
          x2,
          midY,
        );
        ctx.bezierCurveTo(
          x2,
          midY + controlOffset,
          x2,
          y2 - padding - controlOffset,
          x2,
          y2 - padding,
        );
      } else {
        // Плавная кривая для одного уровня
        const controlY = Math.min(y1, y2) - 30 * scale;
        ctx.moveTo(x1 + (x1 < x2 ? padding : -padding), y1);
        ctx.quadraticCurveTo(
          (x1 + x2) / 2,
          controlY,
          x2 + (x1 < x2 ? -padding : padding),
          y2,
        );
      }

      ctx.stroke();

      // Убираем тень для следующих элементов
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
    } else if (type === "spouse") {
      // Градиент для супружеских связей
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, "#EC4899"); // pink-500
      gradient.addColorStop(0.5, "#F97316"); // orange-500
      gradient.addColorStop(1, "#EF4444"); // red-500

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2.5 * scale;
      ctx.lineCap = "round";
      ctx.setLineDash([8 * scale, 4 * scale]);

      // Тень для супружеских связей
      ctx.shadowColor = "rgba(236, 72, 153, 0.2)";
      ctx.shadowBlur = 8 * scale;

      ctx.beginPath();

      const distance = Math.abs(x2 - x1);
      if (distance > 100) {
        // Прямая линия для далеких супругов
        ctx.moveTo(x1 + (x1 < x2 ? padding : -padding), y1);
        ctx.lineTo(x2 + (x1 < x2 ? -padding : padding), y2);
      } else {
        // Элегантная дуга для близких супругов
        const midX = (x1 + x2) / 2;
        const controlY = Math.min(y1, y2) - 25 * scale;

        ctx.moveTo(x1, y1 - padding);
        ctx.quadraticCurveTo(midX, controlY, x2, y2 - padding);
      }

      ctx.stroke();

      // Добавляем сердечки на супружеских связях
      if (distance <= 100) {
        drawHeart(ctx, (x1 + x2) / 2, Math.min(y1, y2) - 35 * scale, 6 * scale);
      }

      // Сброс пунктира и теней
      ctx.setLineDash([]);
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
    }
  };

  // Рисуем маленькое сердечко для супружеских связей
  const drawHeart = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
  ) => {
    ctx.save();
    ctx.fillStyle = "#EC4899";
    ctx.shadowColor = "rgba(236, 72, 153, 0.4)";
    ctx.shadowBlur = 4;

    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(x, y + topCurveHeight);

    // Левая кривая сердечка
    ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
    ctx.bezierCurveTo(
      x - size / 2,
      y + (size + topCurveHeight) / 2,
      x,
      y + (size + topCurveHeight) / 2,
      x,
      y + size,
    );

    // Правая кривая сердечка
    ctx.bezierCurveTo(
      x,
      y + (size + topCurveHeight) / 2,
      x + size / 2,
      y + (size + topCurveHeight) / 2,
      x + size / 2,
      y + topCurveHeight,
    );
    ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);

    ctx.fill();
    ctx.restore();
  };

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
