import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import { navLink } from '../utils/data';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <LinkContainer>
        {
            navLink.map((link, index) => (
              <Link key={index} href={link?.path}>
                {link?.name}
              </Link>
            ))
          }
        </LinkContainer>
        <CompanyContainer>
          <span>&copy;</span>
          <BrandText>fake shop</BrandText>
        </CompanyContainer>
      </FooterContainer>
    </>
  )
}

export default Footer;


// styled ui components for Footer
const FooterContainer = tw.footer`
  mx-auto
  container
  flex
  flex-col
  items-center
  space-y-4
  h-[72px]
`;

const LinkContainer = tw.div`
  md:flex items-center space-x-6
  tracking-wide
`;

const CompanyContainer = tw.div`
  flex
  items-center
  space-x-4
`;

const BrandText = tw.h1`
  font-bold
  text-lg
  uppercase
  tracking-wide
`;