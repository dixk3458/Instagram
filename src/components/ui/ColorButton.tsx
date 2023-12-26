type Props = {
  text: string;
  onClick: () => void;
  size?: 'small' | 'big';
};
export default function ColorButton({ text, onClick, size = 'small' }: Props) {
  return (
    <div
      className={`bg-gradient-to-bl from-yellow-300 via-orange-300 to-amber-300 rounded-md  
    ${size === 'big' ? 'p-[0.3rem]' : 'p-[0.15rem]'}`}
    >
      <button
        className={`bg-white rounded-md hover:opacity-80 transition-opacity duration-150
        ${size === 'big' ? 'p-4 text-2xl' : 'p-[0.3rem] text-base '}`}
        onClick={() => onClick()}
      >
        {text}
      </button>
    </div>
  );
}
