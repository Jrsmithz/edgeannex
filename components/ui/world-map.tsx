"use client";

import { useRef, useEffect, useState, memo, useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

interface Dot {
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
}

interface WorldMapProps {
  dots: Dot[];
  lineColor?: string;
}

const WorldMapComponent = ({ dots, lineColor = "#18181b" }: WorldMapProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize the dotted map to prevent recreation on every render
  const dottedMapSvg = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: 'diagonal' });
    return map.getSVG({
      radius: 0.22,
      color: (mounted && (resolvedTheme === 'dark' || theme === 'dark')) ? '#FFFFFF40' : '#00000040',
      shape: 'circle',
      backgroundColor: (mounted && (resolvedTheme === 'dark' || theme === 'dark')) ? 'black' : 'white',
    });
  }, [mounted, theme, resolvedTheme]);

  // Memoize the paths to prevent recalculation on every render
  const paths = useMemo(() => {
    return dots.map((dot) => {
      const startX = (dot.start.lng + 180) * (800 / 360);
      const startY = (90 - dot.start.lat) * (400 / 180);
      const endX = (dot.end.lng + 180) * (800 / 360);
      const endY = (90 - dot.end.lat) * (400 / 180);
      
      // Create a curved path between points
      const midX = (startX + endX) / 2;
      const midY = Math.min(startY, endY) - 50;
      
      return {
        path: `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`,
        start: { x: startX, y: startY },
        end: { x: endX, y: endY }
      };
    });
  }, [dots]);

  if (!mounted) {
    return <div className="w-full aspect-[2/1] bg-white rounded-lg relative" />;
  }

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(dottedMapSvg)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height={495}
        width={1056}
        draggable={false}
        priority
      />
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {/* Animated paths */}
        {paths.map((path, index) => (
          <g key={`path-group-${index}`}>
            <motion.path
              d={path.path}
              stroke={lineColor}
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 1, 0]
              }}
              transition={{
                duration: 3,
                delay: index * 0.5,
                repeat: Infinity,
                repeatDelay: 4,
                times: [0, 0.4, 0.6, 1],
                ease: "easeInOut"
              }}
            />
            <motion.circle
              cx={path.start.x}
              cy={path.start.y}
              r="2"
              fill={lineColor}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
            />
            <motion.circle
              cx={path.end.x}
              cy={path.end.y}
              r="2"
              fill={lineColor}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.5 + 1.5 }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

// Memoize the entire component to prevent unnecessary re-renders
export const WorldMap = memo(WorldMapComponent); 