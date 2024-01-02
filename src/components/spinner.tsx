import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'
import { LuLoader as Loader } from 'react-icons/lu'

const spinnerVariants = cva('text-white animate-spin', {
  variants: {
    size: {
      default: 'h-4 w-4',
      sm: 'h-2 w-2',
      lg: 'h-6 w-6',
      icon: 'h-10 w-10',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string
}

export const Spinner = ({ className, size }: SpinnerProps) => {
  return <Loader className={cn(spinnerVariants({ size }), className)} />
}
