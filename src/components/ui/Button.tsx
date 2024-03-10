import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({
  className,
  children,
  disabled,
  type = 'button',
  ...props
}, ref) => {
  return (
    <button
      type={type}
      className={cn(
        `
        w-full rounded-md bg-yellow px-6 py-4 disabled:cursor-not-allowed disabled:opacity-75 
        text-primary font-semibold hover:opacity-75 transition-all duration-500 flex justify-center 
        items-center gap-x-2
        `,
        disabled && 'opacity-75 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
