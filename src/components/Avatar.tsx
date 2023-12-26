type Props = {
  image?: string | null;
};

export default function Avatar({ image }: Props) {
  return (
    <div className="w-9 h-9 bg-gradient-to-bl from-yellow-300 via-orange-300 to-amber-300  rounded-full">
      <img
        src={image ?? undefined}
        alt="user profile"
        className="p-[0.1rem] rounded-full"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
