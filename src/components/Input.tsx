type InputProps = {
  label?: string;
  error?: string;
  helpText?: string;
  id: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  error,
  helpText,
  id,
  ...props
}: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-[#4A4A4A] dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-gray-100
          ${error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-[#8EA68B] focus:ring-[#F2A191]'
          }
          ${props.disabled
            ? 'bg-gray-100 cursor-not-allowed opacity-60'
            : 'bg-white dark:bg-gray-800'
          }`}
        aria-describedby={
          error ? `${id}-error` : helpText ? `${id}-help` : undefined
        }
        {...props}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={`${id}-help`} className="text-sm text-[#6B7280] dark:text-gray-400">
          {helpText}
        </p>
      )}
    </div>
  );
}