import Head from 'next/head';
import Image from 'next/image';
import tw from 'tailwind-styled-components/dist/tailwind';

export default function Home({ products }) {
  const imgValue = 3; // value to control the number of images to be displayed

  return (
    <>
      <Head>
        <title>Home | Fake Shop</title>
      </Head>
      <HeroSection>
        <Tagline>Shop for the best products here!</Tagline>
      </HeroSection>
      <ImagesButtonContainer>
        <ImagesContainer>
          <div>
            <Image
              src={"https://via.placeholder.com/150.png"}
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              src={"https://via.placeholder.com/150.png"}
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              src={"https://via.placeholder.com/150.png"}
              width={150}
              height={150}
            />
          </div>
        </ImagesContainer>
        <ShopNowBtn>
          Shop Now
        </ShopNowBtn>
      </ImagesButtonContainer>
    </>
  )
}

export async function getServerSideProps() {

  return {
    props: {

    }
  }
}

// styled ui components for Home
const HeroSection = tw.section`
  container
  flex
  flex-col
  items-center
  text-center
  space-y-4
  mx-auto
`;

const Tagline = tw.h3`
  font-bold
  text-2xl
  md:text-5xl
  my-28
`;

const ImagesButtonContainer = tw.div`
  container
  flex
  flex-col
  items-center
  justify-center
  mx-auto
  space-y-4
  py-6
`;

const ImagesContainer = tw.div`
  container
  flex
  flex-row
  items-center
  justify-center
  mx-auto
  space-x-6
`;

const ShopNowBtn = tw.button`
bg-blue-500
text-white
rounded-sm
space-x-2
px-12
py-2
tracking-wide
hover:bg-white
hover:text-black transition duration-200
`;