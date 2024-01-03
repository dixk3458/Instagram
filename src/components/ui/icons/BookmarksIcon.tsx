import { CiBookmark } from 'react-icons/ci';

type Props = {
  className?: string;
};
export default function BookmarksIcon({ className }: Props) {
  return <CiBookmark className={className || 'w-6 h-6'} />;
}
