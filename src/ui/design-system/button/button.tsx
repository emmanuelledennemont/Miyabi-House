import { IconProps } from '@/types/iconProps';
import clsx from 'clsx';
import { Spinner } from '../spinner/spinner';
import { LinkType, LinkTypes } from '@/lib/link-type';
import Link from 'next/link';

interface ButtonProps {
  variant?:
  | 'primary'
  | 'secondary'
  | 'beigebg'
  | 'outline'
  | 'disabled'
  | 'icon';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  isLoading?: boolean;
  icon?: IconProps;
  icontheme?: 'primary' | 'secondary' | 'beigebg' | 'outline' | 'social';
  className?: string;
  children?: React.ReactNode;
  href?: string;
  linkType?: LinkType;
  action?: Function;
}
export const Button = ({
  variant = 'primary',
  size = 'md',
  icon,
  icontheme = 'primary',
  disabled,
  isLoading,
  children,
  href,
  linkType = 'internal',
  action = () => { },
}: ButtonProps) => {
  let variantStyle: string = '',
    sizeStyle: string = '',
    iconSize: number = 0;

  switch (variant) {
    case 'primary': // default
      variantStyle = 'bg-primary hover:bg-primary-200 text-beigebg rounded';
      break;
    case 'secondary':
      variantStyle = 'bg-secondary hover:bg-secondary-300 text-beigebg rounded';
      break;
    case 'beigebg':
      variantStyle =
        'bg-beigebg hover:bg-secondary-300/20 border boder-secondary text-secondary rounded';
      break;
    case 'outline':
      variantStyle =
        'bg-primary-100 border border-primary-300 text-primary rounded';
      break;
    case 'disabled':
      variantStyle =
        'bg-gray-200 border border-primary-300/50 text-primary rounded cursor-not-allowed';
      break;
    case 'icon':
      if (icontheme === 'primary') {
        variantStyle =
          'bg-primary hover:bg-primary-200 text-beigebg rounded-full';
      }
      if (icontheme === 'secondary') {
        variantStyle =
          'bg-secondary hover:bg-secondary-300 text-beigebg rounded-full';
      }
      if (icontheme === 'beigebg') {
        variantStyle =
          'bg-beigebg hover:bg-primary-300/20 border boder-primary text-primary rounded-full';
      }
      if (icontheme === 'outline') {
        variantStyle = 'bg-transparent text-primary';
      }
      if (icontheme === 'social') {
        variantStyle =
          'bg-primary hover:bg-primary-200 border border-beigebg-200/30 text-beigebg rounded-full';
      }
      break;
  }

  switch (size) {
    case 'sm':
      sizeStyle = `text-captation3 font-medium  ${variant === 'icon'
        ? 'flex items-center justify-center w-[40px] h-[40px]'
        : 'px-[32px] py-[11px]'
        }`;
      iconSize = 24;
      break;
    case 'md': // default
      sizeStyle = `text-caption2 font-medium ${variant === 'icon'
        ? 'flex items-center justify-center w-[50px] h-[50px]'
        : 'px-[40px] py-[13px]'
        }`;
      iconSize = 28;
      break;
    case 'lg':
      sizeStyle = `text-caption1 font-medium ${variant === 'icon'
        ? 'flex items-center justify-center w-[60px] h-[60px]'
        : 'px-[48px] py-[15px]'
        } `;
      iconSize = 32;
      break;
  }

  const handelClick = () => {
    if (action) {
      action();
    }
  }

  const buttonContent = (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {variant === 'primary' || variant === 'icon' ? (
            <Spinner size="sm" variant="beige" />
          ) : (
            <Spinner size="sm" />
          )}
        </div>
      )}
      <div className={clsx(isLoading && 'invisible')}>
        {icon && variant === 'icon' ? (
          <icon.icon size={iconSize} />
        ) : (
          <>{children}</>
        )}
      </div>
    </>
  );

  const buttonElement = (
    <>
      <button
        type="button"
        className={clsx(
          variantStyle,
          sizeStyle,
          iconSize,
          '',
          isLoading && 'cursor-wait',
          'relative animate-nav'
        )}
        onClick={handelClick}
        disabled={disabled}
      >
        {buttonContent}
      </button>
    </>
  );

  if (href) {
    if (linkType === LinkTypes.EXTERNAL) {
      return (
        <a href={href} target="_blank">
          {buttonElement}
        </a>
      )
    } else {
      return <Link href={href} > {buttonElement}</Link>
    }
  }
  return buttonElement;
};
