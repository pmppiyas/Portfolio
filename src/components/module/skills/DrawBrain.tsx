export function drawBrain(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  color: string
) {
  const s = r * 0.66;
  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  const drawHemi = (flip: number) => {
    ctx.beginPath();
    ctx.moveTo(x, y - s * 0.12);
    ctx.bezierCurveTo(
      x + flip * s * 0.08,
      y - s * 1.0,
      x + flip * s * 1.05,
      y - s * 0.9,
      x + flip * s * 1.0,
      y - s * 0.18
    );
    ctx.bezierCurveTo(
      x + flip * s * 1.1,
      y + s * 0.08,
      x + flip * s * 0.85,
      y + s * 0.38,
      x + flip * s * 0.6,
      y + s * 0.52
    );
    ctx.bezierCurveTo(
      x + flip * s * 0.45,
      y + s * 0.62,
      x + flip * s * 0.12,
      y + s * 0.58,
      x,
      y + s * 0.42
    );
    ctx.closePath();
    ctx.fillStyle = color + '2a';
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = r * 0.09;
    ctx.stroke();
  };
  drawHemi(-1);
  drawHemi(1);

  ctx.beginPath();
  ctx.moveTo(x, y - s * 0.12);
  ctx.lineTo(x, y + s * 0.42);
  ctx.strokeStyle = color + '55';
  ctx.lineWidth = r * 0.05;
  ctx.stroke();

  ctx.strokeStyle = color + 'aa';
  ctx.lineWidth = r * 0.055;
  [[-1], [1]].forEach(([f]) => {
    ctx.beginPath();
    ctx.moveTo(x + f * s * 0.28, y - s * 0.65);
    ctx.bezierCurveTo(
      x + f * s * 0.62,
      y - s * 0.45,
      x + f * s * 0.62,
      y - s * 0.08,
      x + f * s * 0.28,
      y + s * 0.08
    );
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + f * s * 0.58, y - s * 0.12);
    ctx.bezierCurveTo(
      x + f * s * 0.82,
      y + s * 0.12,
      x + f * s * 0.72,
      y + s * 0.36,
      x + f * s * 0.42,
      y + s * 0.44
    );
    ctx.stroke();
  });
  ctx.restore();
}
