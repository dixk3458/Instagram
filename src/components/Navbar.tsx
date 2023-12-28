'use client';

import Link from 'next/link';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import { usePathname } from 'next/navigation';
import ColorButton from './ui/ColorButton';
import { signIn, signOut, useSession } from 'next-auth/react';
import Avatar from './Avatar';

const menu = [
  {
    href: '/',
    // 추상화를 하여 재사용성을 더 높이자.
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: '/search',
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: '/new',
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

export default function Navbar() {
  const pathName = usePathname();

  // 클라이언트 컴포넌트에서 로그인된 사용자의 정보를 가져옴
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Instagram</h1>
      </Link>
      <nav>
        <ul className="flex items-center gap-4 p-4 ">
          {menu.map(({ href, icon, clickedIcon }) => {
            return (
              <li key={href}>
                <Link href={href}>
                  {pathName === href ? clickedIcon : icon}
                </Link>
              </li>
            );
          })}
          {user && (
            <li>
              <Link href={`/user/${user.userid}`}>
                <Avatar image={user.image} />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <ColorButton text="Sign out" onClick={() => signOut()} />
            ) : (
              <ColorButton text="Sign in" onClick={() => signIn()} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
