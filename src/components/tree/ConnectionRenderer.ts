import {
  Connection,
  createGradient,
  getConnectionPadding,
} from "@/utils/tree/connectionUtils";

export class ConnectionRenderer {
  private ctx: CanvasRenderingContext2D;
  private scale: number;

  constructor(ctx: CanvasRenderingContext2D, scale: number) {
    this.ctx = ctx;
    this.scale = scale;
  }

  render(connections: Connection[]): void {
    this.setupCanvas();
    connections.forEach((connection) => this.drawConnection(connection));
  }

  private setupCanvas(): void {
    this.ctx.imageSmoothingEnabled = true;
    this.ctx.imageSmoothingQuality = "high";
  }

  private drawConnection(connection: Connection): void {
    const { from, to, type } = connection;
    const padding = getConnectionPadding(this.scale);

    if (type === "parent-child") {
      this.drawParentChildConnection(from.x, from.y, to.x, to.y, padding);
    } else {
      this.drawSpouseConnection(from.x, from.y, to.x, to.y, padding);
    }
  }

  private drawParentChildConnection(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    padding: number,
  ): void {
    const gradient = createGradient(this.ctx, x1, y1, x2, y2, "parent-child");

    this.ctx.strokeStyle = gradient;
    this.ctx.lineWidth = 3 * this.scale;
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";

    this.setShadow("#8B5CF6", 10, 2);
    this.ctx.beginPath();

    if (Math.abs(y2 - y1) > 80) {
      this.drawVerticalCurve(x1, y1, x2, y2, padding);
    } else {
      this.drawHorizontalCurve(x1, y1, x2, y2, padding);
    }

    this.ctx.stroke();
    this.clearShadow();
  }

  private drawSpouseConnection(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    padding: number,
  ): void {
    const gradient = createGradient(this.ctx, x1, y1, x2, y2, "spouse");
    const distance = Math.abs(x2 - x1);

    this.ctx.strokeStyle = gradient;
    this.ctx.lineWidth = 2.5 * this.scale;
    this.ctx.lineCap = "round";
    this.ctx.setLineDash([8 * this.scale, 4 * this.scale]);

    this.setShadow("#EC4899", 8, 0);
    this.ctx.beginPath();

    if (distance > 100) {
      this.drawStraightLine(x1, y1, x2, y2, padding);
    } else {
      this.drawSpouseArc(x1, y1, x2, y2, padding);
      this.drawHeart((x1 + x2) / 2, Math.min(y1, y2) - 35 * this.scale);
    }

    this.ctx.stroke();
    this.ctx.setLineDash([]);
    this.clearShadow();
  }

  private drawVerticalCurve(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    padding: number,
  ): void {
    const midY = (y1 + y2) / 2;
    const controlOffset = Math.abs(x2 - x1) * 0.3;

    this.ctx.moveTo(x1, y1 + padding);
    this.ctx.bezierCurveTo(
      x1,
      y1 + padding + controlOffset,
      x1,
      midY - controlOffset,
      x1,
      midY,
    );
    this.ctx.bezierCurveTo(
      x1,
      midY + controlOffset,
      x2,
      midY - controlOffset,
      x2,
      midY,
    );
    this.ctx.bezierCurveTo(
      x2,
      midY + controlOffset,
      x2,
      y2 - padding - controlOffset,
      x2,
      y2 - padding,
    );
  }

  private drawHorizontalCurve(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    padding: number,
  ): void {
    const controlY = Math.min(y1, y2) - 30 * this.scale;
    this.ctx.moveTo(x1 + (x1 < x2 ? padding : -padding), y1);
    this.ctx.quadraticCurveTo(
      (x1 + x2) / 2,
      controlY,
      x2 + (x1 < x2 ? -padding : padding),
      y2,
    );
  }

  private drawStraightLine(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    padding: number,
  ): void {
    this.ctx.moveTo(x1 + (x1 < x2 ? padding : -padding), y1);
    this.ctx.lineTo(x2 + (x1 < x2 ? -padding : padding), y2);
  }

  private drawSpouseArc(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    padding: number,
  ): void {
    const midX = (x1 + x2) / 2;
    const controlY = Math.min(y1, y2) - 25 * this.scale;
    this.ctx.moveTo(x1, y1 - padding);
    this.ctx.quadraticCurveTo(midX, controlY, x2, y2 - padding);
  }

  private drawHeart(x: number, y: number): void {
    const size = 6 * this.scale;
    this.ctx.save();
    this.ctx.fillStyle = "#EC4899";
    this.setShadow("#EC4899", 4, 0);

    this.ctx.beginPath();
    const topCurveHeight = size * 0.3;
    this.ctx.moveTo(x, y + topCurveHeight);

    // Левая часть сердца
    this.ctx.bezierCurveTo(
      x,
      y,
      x - size / 2,
      y,
      x - size / 2,
      y + topCurveHeight,
    );
    this.ctx.bezierCurveTo(
      x - size / 2,
      y + (size + topCurveHeight) / 2,
      x,
      y + (size + topCurveHeight) / 2,
      x,
      y + size,
    );

    // Правая часть сердца
    this.ctx.bezierCurveTo(
      x,
      y + (size + topCurveHeight) / 2,
      x + size / 2,
      y + (size + topCurveHeight) / 2,
      x + size / 2,
      y + topCurveHeight,
    );
    this.ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);

    this.ctx.fill();
    this.ctx.restore();
  }

  private setShadow(color: string, blur: number, offsetY: number): void {
    this.ctx.shadowColor = `${color}33`;
    this.ctx.shadowBlur = blur * this.scale;
    this.ctx.shadowOffsetY = offsetY * this.scale;
  }

  private clearShadow(): void {
    this.ctx.shadowColor = "transparent";
    this.ctx.shadowBlur = 0;
    this.ctx.shadowOffsetY = 0;
  }
}
