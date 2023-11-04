import { LinkType } from '@/lib/link-type';
import { Button } from '../button/button';
import { text } from 'stream/consumers';

interface CardProps {
  variant?: 'primary' | 'secondary' | 'beigebg';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  linkType?: LinkType;
  action?: Function;
  text?: string;
}

export const Card = ({

  variant = 'primary',
  size = 'md',
  text,
  isLoading,
  children,
  href,
  linkType = 'internal',
  action = () => { },
}: CardProps) => {
  let variantStyle: string = '',
    sizeStyle: string = '';

  switch (variant) {
    case 'primary': // default
      variantStyle = 'bg-transparent text-beigebg rounded';
      break;
    case 'secondary':
      variantStyle = 'bg-secondary text-beigebg rounded';
      break;
    case 'beigebg':
      variantStyle =
        'bg-transparent border boder-primary text-primary rounded';
      break;
  }

  switch (size) {
    case 'xs':
      sizeStyle = 'py-1 px-2 text-xs';
      break;
    case 'sm':
      sizeStyle = 'py-2 px-4 text-sm';
      break;
    case 'md':
      sizeStyle = 'py-3 px-6 text-md';
      break;
    case 'lg':
      sizeStyle = 'py-4 px-8 text-lg';
      break;
  }

  return (
    <div className="relative">
      <div
        className={`flex flex-col justify-center  ${variantStyle} ${sizeStyle} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => action()}
      >
        {children}
      </div>

    </div>
  );
}
