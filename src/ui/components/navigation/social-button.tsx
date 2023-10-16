import { Button } from '@/ui/design-system/button/button';
import { socialAppLink } from './app-links';
import { v4 as uuidv4 } from 'uuid';
import { MdOutlineDisabledByDefault } from 'react-icons/md';
import clsx from 'clsx';

interface SocialButtonProps {
  iconTheme?: 'social' | 'primary' | 'secondary' | 'beigebg' | 'outline';
  className?: string;
}

export const SocialButton = ({
  className,
  iconTheme = 'social',
}: SocialButtonProps) => {
  const iconList = socialAppLink.map((social) => (
    <Button
      key={uuidv4()}
      size="md"
      variant="icon"
      icon={{ icon: social.icon ? social.icon : MdOutlineDisabledByDefault }}
      icontheme={iconTheme}
      href={social.href}
      linkType={social.type}
    ></Button>
  ));

  return (
    <div className={clsx(className, 'flex flex-rowitems-center gap-2')}>
      {iconList}
    </div>
  );
};
