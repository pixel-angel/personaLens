interface EdgeLabelProps {
  text: string;
}

export default function EdgeLabel({ text }: EdgeLabelProps) {
  return (
    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
      {text}
    </span>
  );
}
