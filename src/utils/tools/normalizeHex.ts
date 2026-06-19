export function normalizeHex(value: string): string {
  let v = value.trim();
  if (!v.startsWith('#')) v = '#' + v;
  return v;
}
