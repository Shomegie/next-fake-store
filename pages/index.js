import Head from 'next/head';
import Image from 'next/image';
import tw from 'tailwind-styled-components/dist/tailwind';
import { useRouter } from 'next/dist/client/router';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home({ imgProducts, products }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home | Fake Shop</title>
      </Head>
      <HeroSection>
        <Tagline>Shop for the best products here!</Tagline>
      </HeroSection>

      <ImagesButtonSection>
        <ImagesContainer>
          {
            imgProducts?.map((product) => (
              <img src={product?.image} alt={product?.title} key={product?.id} className="h-[250px] w-[250px] rounded-sm" />
            ))
          }
        </ImagesContainer>
        <ShopNowBtn onClick={() => router.push('/shop')}>
          Shop Now
        </ShopNowBtn>
      </ImagesButtonSection>

      <FeaturedProductsSection>
        <FeaturedProductText>Featured Products</FeaturedProductText>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={4000}
        >
          {
            products?.map((product) => (
              <div key={product?.id}>
                <img src={product?.image} alt={product?.title} className="h-[150px] w-[50%]"/>
                <span className="legend">{product?.title}</span>
              </div>
            ))
          }
        </Carousel>
      </FeaturedProductsSection>

      <NewsLetterSection>

      </NewsLetterSection>
    </>
  )
}

export async function getServerSideProps() {
  const imgValue = 3;
  const imgProducts = await fetch(`https://fakestoreapi.com/products?limit=${imgValue}`).then((res) => res.json());
  const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json());

  return {
    props: {
      imgProducts,
      products
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

const ImagesButtonSection = tw.section`
  container
  flex
  flex-col
  items-center
  justify-center
  mx-auto
  space-y-10
  py-8
`;

const ImagesContainer = tw.div`
  container
  flex
  flex-col
  space-y-2
  md:flex-row
  items-center
  justify-center
  mx-auto
  md:space-x-6
`;

const ShopNowBtn = tw.button`
bg-blue-500
text-white
rounded-sm
space-x-2
px-12
py-3
tracking-wide
hover:bg-white
hover:text-black transition duration-200
`;

const FeaturedProductsSection = tw.section`
  flex
  flex-col
  items-center
  mx-auto
  space-y-2
`;

const  FeaturedProductText = tw.h2`
  font-bold
  text-2xl
    md:text-5xl
`;

const NewsLetterSection = tw.section`
  container
  flex
  flex-col
  items-center
  mx-auto
  px-24
  md:flex-row
  md:space-x-6
`;