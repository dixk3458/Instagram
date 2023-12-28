type Props = {
  image?: string | null;
  size?: 'small' | 'normal';
  hightlight?: boolean;
};

export default function Avatar({
  image,
  size = 'normal',
  hightlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, hightlight)}>
      <img
        className={`bg-white object-cover rounded-full ${getImageSizeStyle(
          size
        )}`}
        src={image ?? undefined}
        alt="user profile"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getContainerStyle(size: string, hightlight: boolean): string {
  const baseStyle = 'rounded-full flex justify-center items-center';
  const hightlightStyle = `${
    hightlight
      ? 'bg-gradient-to-bl from-yellow-300 via-orange-300 to-amber-300'
      : ''
  }`;

  const sizeStyle = `${size === 'small' ? 'w-9 h-9' : 'w-[68px] h-[68px]'}`;

  return `${baseStyle} ${hightlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string): string {
  return size === 'small'
    ? 'w-[34px] h-[34px] p-[0.1rem]'
    : 'w-16 h-16 p-[0.2rem]';
}
