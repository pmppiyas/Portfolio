import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

interface Skills {
  frontend: string[];
  backend: string[];
  database: string[];
  ai: string[];
}

interface GraphNode {
  id: string;
  src: string;
  size: number;
  category: 'frontend' | 'backend' | 'database' | 'root' | 'ai';
  label?: string;
  isCategory?: boolean;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

interface GraphLink {
  source: string;
  target: string;
  category: string;
}

const CATEGORY_CONFIG = {
  frontend: {
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.6)',
    label: 'Frontend',
    nodeColor: 'rgba(56,189,248,0.15)',
  },
  backend: {
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.6)',
    label: 'Backend',
    nodeColor: 'rgba(167,139,250,0.15)',
  },
  database: {
    color: '#34d399',
    glow: 'rgba(52,211,153,0.6)',
    label: 'Database',
    nodeColor: 'rgba(52,211,153,0.15)',
  },
  ai: {
    color: '#fb923c',
    glow: 'rgba(251,146,60,0.6)',
    label: 'AI',
    nodeColor: 'rgba(251,146,60,0.15)',
  },
  root: {
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.8)',
    label: 'Skills',
    nodeColor: 'rgba(245,158,11,0.18)',
  },
} as const;

type Category = keyof typeof CATEGORY_CONFIG;
const ALL_CATS: Exclude<Category, 'root'>[] = [
  'frontend',
  'backend',
  'database',
  'ai',
];

const imageCache = new Map<string, HTMLImageElement | null>();

function isMonochromeSvg(src: string) {
  return (
    src.includes('raw.githubusercontent.com') || src.includes('simple-icons')
  );
}

async function loadSvgWhite(src: string): Promise<HTMLImageElement | null> {
  try {
    const res = await fetch(src);
    if (!res.ok) return null;
    let svg = await res.text();

    svg = svg
      .replace(/fill="(?!none)([^"]*)"/gi, 'fill="white"')
      .replace(
        /fill:\s*(?!none)(#[0-9a-fA-F]+|black|rgb[^;)"]*)/gi,
        'fill:white'
      );

    if (!svg.includes('viewBox')) {
      svg = svg.replace(/<svg/, '<svg viewBox="0 0 24 24"');
    }

    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve(null);
      };
      img.src = url;
    });
  } catch {
    return null;
  }
}

async function loadSvgBlob(src: string): Promise<HTMLImageElement | null> {
  try {
    const res = await fetch(src, { mode: 'cors' });
    if (!res.ok) return null;
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve(null);
      };
      img.src = url;
    });
  } catch {
    return null;
  }
}

async function loadImage(src: string): Promise<HTMLImageElement | null> {
  if (imageCache.has(src)) return imageCache.get(src)!;
  const img = isMonochromeSvg(src)
    ? await loadSvgWhite(src)
    : await loadSvgBlob(src);
  imageCache.set(src, img);
  return img;
}

const DEFAULT_SKILLS: Skills = {
  frontend: [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  ],
  backend: [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  ],
  database: [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  ],
  ai: [
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/langchain.svg',
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ollama.svg',
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/huggingface.svg',
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/anthropic.svg',
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/pytorch.svg',
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tensorflow.svg',
  ],
};

function drawBrain(
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

function drawHoverLabel(
  ctx: CanvasRenderingContext2D,
  label: string,
  x: number,
  y: number,
  r: number,
  gs: number,
  color: string
) {
  const fs = 10 / gs;
  const pad = 4 / gs;
  ctx.font = `${fs}px 'Courier New'`;
  const tw = ctx.measureText(label).width;
  const bx = x - tw / 2 - pad;
  const by = y + r + 5 / gs;
  ctx.save();
  ctx.fillStyle = 'rgba(6,9,16,0.92)';
  ctx.beginPath();
  ctx.roundRect(bx, by, tw + pad * 2, fs + pad * 2, 3 / gs);
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.6 / gs;
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(label, x, by + pad);
  ctx.restore();
}

interface Props {
  skills?: Skills;
  width?: number;
  height?: number;
}

export default function SkillForceGraph({
  skills = DEFAULT_SKILLS,
  width = 600,
  height = 600,
}: Props) {
  const fgRef = useRef<any>(null);
  const [tick, setTick] = useState(0);
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const allImagesReady = useRef(false);

  const skillCategories = useMemo(
    () => ({
      frontend: (skills?.frontend || []).map((s) => ({
        src: s,
        size: 50,
        category: 'frontend' as const,
      })),
      backend: (skills?.backend || []).map((s) => ({
        src: s,
        size: 50,
        category: 'backend' as const,
      })),
      database: (skills?.database || []).map((s) => ({
        src: s,
        size: 50,
        category: 'database' as const,
      })),
      ai: (skills?.ai || []).map((s) => ({
        src: s,
        size: 50,
        category: 'ai' as const,
      })),
    }),
    [skills]
  );

  const graphData = useMemo(() => {
    const nodes: GraphNode[] = [];
    const links: GraphLink[] = [];

    nodes.push({
      id: 'root',
      src: '',
      size: 70,
      category: 'root',
      label: 'Skills',
      fx: -70,
      fy: 0,
    });

    ALL_CATS.forEach((cat) => {
      const catId = `cat_${cat}`;
      nodes.push({
        id: catId,
        src: '',
        size: 50,
        category: cat,
        label: CATEGORY_CONFIG[cat].label.split('/')[0],
        isCategory: true,
      });
      links.push({ source: 'root', target: catId, category: cat });
      skillCategories[cat].forEach((skill, i) => {
        const id = `${cat}_${i}`;
        nodes.push({
          id,
          src: skill.src,
          size: skill.size,
          category: skill.category,
          label:
            skill.src.split('/').pop()?.replace('.svg', '').split('.')[0] || id,
        });
        links.push({ source: catId, target: id, category: cat });
      });
    });
    return { nodes, links };
  }, [skillCategories]);

  useEffect(() => {
    allImagesReady.current = false;
    const srcs = graphData.nodes.filter((n) => n.src).map((n) => n.src);

    Promise.all(srcs.map(loadImage)).then(() => {
      allImagesReady.current = true;
      setTick((t) => t + 1);
      setTimeout(() => {
        fgRef.current?.zoomToFit(400, 60);
      }, 2500);
    });
  }, [graphData]);

  const handleEngineStop = useCallback(() => {
    fgRef.current?.zoomToFit(400, 60);
  }, []);

  const nodeCanvasObject = useCallback(
    (node: GraphNode, ctx: CanvasRenderingContext2D, gs: number) => {
      const cfg = CATEGORY_CONFIG[node.category];
      const r = (node.size / 2 / gs) * 1.4;
      const x = node.x ?? 0;
      const y = node.y ?? 0;
      const hov = hoveredNode?.id === node.id;

      if (node.id === 'root') {
        const g = ctx.createRadialGradient(x, y, r * 0.3, x, y, r * 2.8);
        g.addColorStop(0, 'rgba(245,158,11,0.14)');
        g.addColorStop(1, 'rgba(245,158,11,0)');
        ctx.beginPath();
        ctx.arc(x, y, r * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      // Circle bg + border
      ctx.save();
      ctx.shadowColor = cfg.glow;
      ctx.shadowBlur = hov ? 30 : 14;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = hov
        ? cfg.nodeColor.replace(/[\d.]+\)$/, '0.32)')
        : cfg.nodeColor;
      ctx.fill();
      ctx.strokeStyle = cfg.color;
      ctx.lineWidth = (hov ? 2.8 : 1.8) / gs;
      ctx.stroke();
      ctx.restore();

      if (node.id === 'root') {
        drawBrain(ctx, x, y, r, cfg.color);
        return;
      }

      if (node.isCategory) {
        ctx.save();
        ctx.fillStyle = cfg.color;
        ctx.font = `bold ${Math.max(r * 0.52, 5 / gs)}px 'Courier New', monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(cfg.label.toUpperCase(), x, y);
        ctx.restore();
        return;
      }

      // Skill icon
      const img = imageCache.get(node.src);
      if (img && img.naturalWidth > 0) {
        const sz = r * 1.28;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, r * 0.84, 0, Math.PI * 2);
        ctx.clip();
        try {
          ctx.drawImage(img, x - sz / 2, y - sz / 2, sz, sz);
        } catch {
          /* taint fallback */
        }
        ctx.restore();
      } else {
        // spinner dots while loading
        const orbit = r * 0.42;
        const dotR = r * 0.1;
        ctx.fillStyle = cfg.color + 'bb';
        for (let d = 0; d < 5; d++) {
          const a = (d / 5) * Math.PI * 2;
          ctx.beginPath();
          ctx.arc(
            x + Math.cos(a) * orbit,
            y + Math.sin(a) * orbit,
            dotR,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      }

      if (hov && node.label)
        drawHoverLabel(ctx, node.label, x, y, r, gs, cfg.color);
    },
    [hoveredNode, tick]
  );

  const linkColor = useCallback(
    (link: GraphLink) =>
      (CATEGORY_CONFIG[link.category as Category]?.color ?? '#fff') + '44',
    []
  );
  const nodePointer = useCallback(
    (
      node: GraphNode,
      color: string,
      ctx: CanvasRenderingContext2D,
      gs: number
    ) => {
      const r = (node.size / 2 / gs) * 1.4;
      ctx.beginPath();
      ctx.arc(node.x ?? 0, node.y ?? 0, r, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    },
    []
  );

  return (
    <div
      style={{
        background:
          'radial-gradient(ellipse at 50% 50%, #0d1117 0%, #060910 100%)',
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
        width,
        height,
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow:
          '0 0 60px rgba(56,189,248,0.05), 0 0 120px rgba(167,139,250,0.03)',
      }}
    >
      {/* Legend */}
      <div
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(12px)',
          padding: '10px 14px',
          borderRadius: 10,
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {ALL_CATS.map((cat) => (
          <div
            key={cat}
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          >
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: '50%',
                background: CATEGORY_CONFIG[cat].color,
                boxShadow: `0 0 8px ${CATEGORY_CONFIG[cat].glow}`,
              }}
            />
            <span
              style={{
                color: CATEGORY_CONFIG[cat].color,
                fontSize: 11,
                fontFamily: "'Courier New', monospace",
                letterSpacing: '0.5px',
              }}
            >
              {CATEGORY_CONFIG[cat].label}
            </span>
          </div>
        ))}
      </div>

      <ForceGraph2D
        ref={fgRef}
        graphData={graphData as any}
        width={width}
        height={height}
        backgroundColor="transparent"
        nodeCanvasObject={nodeCanvasObject as any}
        nodeCanvasObjectMode={() => 'replace'}
        nodePointerAreaPaint={nodePointer as any}
        linkColor={linkColor as any}
        linkWidth={1.2}
        linkCurvature={0.18}
        onNodeHover={(node: any) => setHoveredNode(node ?? null)}
        onNodeClick={(node: any) => {
          fgRef.current?.centerAt(node.x, node.y, 500);
          fgRef.current?.zoom(3.5, 500);
        }}
        onBackgroundClick={() => fgRef.current?.zoomToFit(400, 60)}
        onEngineStop={handleEngineStop}
        cooldownTicks={200}
        d3AlphaDecay={0.015}
        d3VelocityDecay={0.25}
        nodeLabel={() => ''}
        enableNodeDrag
        enableZoomInteraction
        minZoom={0.5}
        maxZoom={8}
      />
    </div>
  );
}
