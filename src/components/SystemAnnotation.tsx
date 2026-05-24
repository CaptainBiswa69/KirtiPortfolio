interface SystemAnnotationProps {
  text: string;
  variant?: 'default' | 'accent' | 'muted';
}

export default function SystemAnnotation({ text, variant = 'default' }: SystemAnnotationProps) {
  const variantClasses = {
    default: 'text-text-tertiary',
    accent: 'text-lavender',
    muted: 'text-text-tertiary opacity-60',
  };

  return (
    <span className={`font-mono text-xs tracking-wide ${variantClasses[variant]}`}>
      {text}
    </span>
  );
}
