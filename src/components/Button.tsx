type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const base = `inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`;

  const variants = {
    primary: `bg-[#F2A191] text-white hover:bg-[#e8907e] focus:ring-[#F2A191] dark:bg-[#e8907e] dark:hover:bg-[#F2A191]`,
    secondary: `bg-[#8EA68B] text-white hover:bg-[#7a9277] focus:ring-[#8EA68B] dark:bg-[#7a9277] dark:hover:bg-[#8EA68B]`,
    danger: `bg-red-600 text-white hover:bg-red-700 focus:ring-red-500`,
    ghost: `bg-transparent text-[#4A4A4A] hover:bg-[#F2A191]/20 focus:ring-[#F2A191] dark:text-gray-300 dark:hover:bg-gray-800`,
  };

  const sizes = {
    sm: `px-3 py-1.5 text-sm`,
    md: `px-4 py-2 text-base`,
    lg: `px-6 py-3 text-lg`,
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
}