"use client";

import GlassCard from "@/components/common/GlassCard";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  Node,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";

interface Props {
  analysis: any;
}

export default function FootprintGraph({ analysis }: Props) {
  const graph = analysis.graph;

  if (!graph) {
    return (
      <GlassCard className="p-8">
        <h2 className="mb-6 text-2xl font-bold">Digital Footprint Graph</h2>

        <div className="flex h-[500px] items-center justify-center rounded-3xl border border-white/10 bg-[#0F0F11] text-zinc-500">
          No graph available.
        </div>
      </GlassCard>
    );
  }

  const nodes: Node[] = graph.nodes.map((node: any, index: number) => ({
    id: node.id,

    data: {
      label: node.label,
    },

    position: {
      x: (index % 4) * 220 + 80,
      y: Math.floor(index / 4) * 170 + 60,
    },

    style: {
      borderRadius: 16,
      border: "1px solid rgba(255,255,255,.08)",
      background: "#18181b",
      color: "white",
      padding: 12,
      width: 150,
    },
  }));

  const edges: Edge[] = graph.edges.map((edge: any, index: number) => ({
    id: `${edge.source}-${edge.target}-${index}`,

    source: edge.source,

    target: edge.target,

    label: edge.label,

    animated: true,
  }));

  return (
    <GlassCard className="p-8">
      <h2 className="mb-6 text-2xl font-bold">Digital Footprint Graph</h2>

      <div className="h-[550px] rounded-3xl overflow-hidden border border-white/10">
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <MiniMap />

          <Controls />

          <Background />
        </ReactFlow>
      </div>
    </GlassCard>
  );
}
