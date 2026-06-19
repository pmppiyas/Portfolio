export function trianglePoints(cx: number, cy: number, r: number): string {
  const angles = [-90, 30, 150];
  return angles
    .map((a) => {
      const rad = (a * Math.PI) / 180;
      return `${(cx + r * Math.cos(rad)).toFixed(2)},${(cy + r * Math.sin(rad)).toFixed(2)}`;
    })
    .join(' ');
}
