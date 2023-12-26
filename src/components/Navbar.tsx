'use client';

import Link from 'next/link';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import { usePathname } from 'next/navigation';

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
  return (
    <div>
      <Link href="/">
        <h1>Instagram</h1>
      </Link>
      <nav>
        <ul>
          {menu.map(({ href, icon, clickedIcon }) => {
            return (
              <li key={href}>
                <Link href={href}>
                  {pathName === href ? clickedIcon : icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
