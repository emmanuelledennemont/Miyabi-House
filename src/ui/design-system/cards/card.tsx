import { LinkType } from '@/lib/link-type';

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
      variantStyle = 'bg-beigebg text-primary border border-primary rounded';
      break;
    case 'beigebg':
      variantStyle =
        'bg-transparent border boder-primary text-primary rounded';
      break;
  }

  switch (size) {
    case 'xs':
      sizeStyle = 'py-0 px-1 text-xs max-w-[350px]';
      break;
    case 'sm':
      sizeStyle = 'py-2 px-4 text-sm max-w-[390px]';
      break;
    case 'md':
      sizeStyle = 'py-3 px-6 text-md max-w-[430px]';
      break;
    case 'lg':
      sizeStyle = 'py-4 px-8 text-lg max-w-[470px]';
      break;
  }

  return (
    <div className="relative">
      <div
        className={`flex flex-col justify-center ${variantStyle} ${sizeStyle} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => action()}
      >
        {children}
      </div>

    </div>
  );
}
