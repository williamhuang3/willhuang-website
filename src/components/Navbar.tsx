'use client';
import Link from 'next/link';
import { useState } from 'react';
const items = [
  { id: 'wh',        label: 'WH' },
  { id: 'about',     label: 'About' },
  { id: 'experience',label: 'Experience' },
  { id: 'projects',  label: 'Projects' },
];
export default function Navbar() {
  const [active, setActive] = useState('wh');
  return (
    <nav className='fixed top-0 w-full backdrop-blur bg-box/80 z-50 text-text'>
      <ul className='flex gap-6 p-4 justify-center'>
        {items.map(({ id, label }) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              className={active === id ? 'text-primary font-semibold' : ''}
              onClick={() => setActive(id)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}