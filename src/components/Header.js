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
            <ShoppingCartIcon className="h-4"/>
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
  md:px-12
  bg-slate-600
`;

const BrandText = tw.h1`
  font-bold
  text-lg
  uppercase
  tracking-wide
`;

const LinkContainer = tw.div`
  hidden
  md:flex items-center space-x-6
  tracking-wide
`;

const CartBtn = tw.button`
  bg-blue-500
  text-white
  rounded-sm
  flex
  items-center
  inline-flex
  space-x-2
  px-6
  py-2
  tracking-wide
  hover:bg-white
  hover:text-black transition duration-200
`;