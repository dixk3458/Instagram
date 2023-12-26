type Props = {
  text: string;
  onClick: () => void;
};
export default function ColorButton({ text, onClick }: Props) {
  return (
    <div className="bg-gradient-to-bl from-yellow-300 via-orange-300 to-amber-300 rounded-md p-[0.15rem] ">
      <button
        className="bg-white rounded-md text-base p-[0.3rem] hover:opacity-80 transition-opacity duration-150"
        onClick={() => onClick}
      >
        {text}
      </button>
    </div>
  );
}
