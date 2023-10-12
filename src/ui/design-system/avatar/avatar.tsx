import clsx from "clsx";
import Image from "next/image";

interface AvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  src: string;
  alt: string;
}

export const Avatar = ({ size = 'md', src, alt }: AvatarProps) => {
  let sizeAvatar: string = "";

  switch (size) {
    case 'xs':
      sizeAvatar = "w-[24px] h-[24px]";
      break;
    case 'sm':
      sizeAvatar = "w-[28px] h-[28px]";
      break;
    case 'md': // default
      sizeAvatar = "w-[42px] h-[42px]";
      break;
    case 'lg':
      sizeAvatar = "w-[50px] h-[50px]";
      break;
  }

  return (
    <div className={clsx(sizeAvatar, "bg-primary-200/50 rounded-full relative")}>
      <Image src={src} alt={alt} fill className="object-cover object-center rounded-full" />
    </div>
  );
};
