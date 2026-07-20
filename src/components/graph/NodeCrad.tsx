interface NodeCardProps {
  title: string;
}

export default function NodeCard({ title }: NodeCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl">
      {title}
    </div>
  );
}
