import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

export default function Gnb() {
  const [activeItem, setActiveItem] = useState('home');
  const router = useRouter();
  const goLink = (e: React.MouseEvent<HTMLAnchorElement>, data: any) => {
    const { name } = data;
    setActiveItem(name);

    if (name === 'home') {
      router.push('/');
    } else if (name === 'about') {
      router.push('/about');
    }
  }

  return (
    <Menu inverted>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={goLink}
      />
      <Menu.Item
        name='about'
        active={activeItem === 'about'}
        onClick={goLink}
      />
    </Menu>
  );
}