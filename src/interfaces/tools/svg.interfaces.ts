export type ShapeType = 'Rectangle' | 'Circle' | 'Triangle' | 'Star' | 'Polygon';

export interface BuildShapeMarkupProps {
  shape: ShapeType;
  width: number;
  height: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  rotation: number;
  cornerRadius: number;
  sides: number;
}
