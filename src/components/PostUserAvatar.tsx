import Avatar from './Avatar';

type Props = {
  image: string;
  userid: string;
};

export default function PostUserAvatar({ image, userid }: Props) {
  return (
    <div className="flex items-center p-2">
      <Avatar image={image} size="medium" hightlight={true} />
      <span className="text-gray-900 font-bold ml-2">{userid}</span>
    </div>
  );
}
