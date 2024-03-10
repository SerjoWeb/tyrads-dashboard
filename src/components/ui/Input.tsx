import React from 'react';

import { cn } from '../../utils/cn';

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(({
  className,
  type,
  disabled,
  ...props
}, ref) => {
  return (
    <div className='w-full flex flex-col gap-y-1'>
      {props.id && props.name ? (
        <label htmlFor={props.id} className='text-sm text-secondary'>
          {props.name && props.name.charAt(0).toUpperCase() + props.name.slice(1)}
          {props.required ? (<sup className='text-xs text-red'> *</sup>) : null}
        </label>
      ) : null}

      <input
        type={type}
        className={cn(
          `
          flex w-full rounded-md bg-transparent border border-gray 
          px-6 py-4 text-primary text-sm file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-secondary 
          disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none
        `,
          disabled && 'opacity-75',
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    </div>
  )
});

Input.displayName = 'Input';

export default Input;
