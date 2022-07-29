import Link from 'next/link';
import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import { navLink } from '../utils/data';
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/router';

const Header = () => {
  // router
  const router = useRouter();

  return (
    <>
      <NavBar>
        <BrandText>
          fake shop
        </BrandText>

        <LinkContainer>
          {
            navLink.map((link, index) => (
              <Link key={index} href={link?.path} className="navLink">
                {link?.name}
              </Link>
            ))
          }
          <CartBtn>
            <ShoppingCartIcon className="h-4 self-center"/>
            <span>Your Cart</span>
            {/* <span className="badge">99+</span> */}
          </CartBtn>
        </LinkContainer>
      </NavBar>
    </>
  )
}

export default Header;

// styled ui components for Header
const NavBar = tw.nav`
  sticky
  flex
  top-0
  z-[1000]
  items-center
  justify-between
  px-10
  h-[72px]
  xl:px-12
  bg-slate-200
`;

const BrandText = tw.h1`
  font-bold
  text-lg
  uppercase
  tracking-wide
  text-blue-500
`;

const LinkContainer = tw.div`
  hidden
  xl:flex items-center space-x-6
  tracking-wide
`;

const CartBtn = tw.button`
  bg-blue-500
  text-white
  rounded-sm
  inline-flex
  items-baseline
  space-x-1
  p-3
  tracking-wide
  hover:bg-blue-600 transition duration-200
`;