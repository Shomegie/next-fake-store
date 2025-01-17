import Head from 'next/head';
import Image from 'next/image';
import tw from 'tailwind-styled-components/dist/tailwind';
import { useRouter } from 'next/dist/client/router';
import CarouselItem from '../src/components/CarouselItem';

export default function Home({ imgProducts, products }) {
  const router = useRouter();
  const carouselValue = 6;

  return (
    <>
      <Head>
        <title>Fake Shop</title>
      </Head>

      <HeroSection>
        <Tagline>Shop for the best products here!</Tagline>
      </HeroSection>

      <ImagesButtonSection>
        <ImagesContainer>
          {
            imgProducts?.map((product) => (
              <Image
                src={product?.image}
                width={330}
                height={210}
                objectFit="contain"
                key={product?.id}
              />
            ))
          }
        </ImagesContainer>
        <HomeUIBtn onClick={() => router.push('/shop')}>
          Shop Now
        </HomeUIBtn>
      </ImagesButtonSection>

      <FeaturedProductsSection>
        <FeaturedProductText>Featured Products</FeaturedProductText>
        <FeaturedProductCarouselContainer>
          <FeaturedProductCollection>
            {
              products?.map((product, index) => index < carouselValue && (
                <CarouselItem key={product?.id} productPrice={product?.price} productTitle={product?.title} productImg={product?.image} />
              ))
            }
          </FeaturedProductCollection>
        </FeaturedProductCarouselContainer>
      </FeaturedProductsSection>

      <NewsLetterSection>
        <NewsLetterLeftSide>
          <span className="text-2xl xl:text-4xl">Newsletter</span>
          <p className="text-base text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni delectus iste aperiam molestias non.</p>
        </NewsLetterLeftSide>
        <NewsLetterRightSide>
          <input type="text" placeholder='Email Address' className="p-4 border border-slate-400" />
          <HomeUIBtn>Subscribe</HomeUIBtn>
        </NewsLetterRightSide>
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
  my-14
`;

const Tagline = tw.h3`
  text-3xl
  px-4
  xl:text-5xl
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
  gap-6
  xl:flex-row
  items-center
  justify-center
  mx-auto
`;

const HomeUIBtn = tw.button`
bg-blue-500
text-white
rounded-sm
space-x-2
px-12
py-4
tracking-wide
hover:bg-blue-600 transition duration-200
`;

const FeaturedProductsSection = tw.section`
  flex
  flex-col
  items-center
  mx-auto
  space-y-2
  p-6
  mt-5
  border
  border-y
  border-slate-400
`;

const FeaturedProductText = tw.h2`
  text-2xl
  xl:text-5xl
  px-4
`;

const FeaturedProductCarouselContainer = tw.div`
  relative 
  flex 
  flex-col 
  space-y-2
  px-14
  max-w-sm
  xl:max-w-[1400px]
  mx-auto
`;

const FeaturedProductCollection = tw.div`
  flex
  flex-row
  space-x-6 
  overflow-y-hidden
  overscroll-x-scroll
  scrollbar-hide
  p-2 
  -m-2
`;

const NewsLetterSection = tw.section`
  flex
  flex-col
  items-center
  mx-auto
  px-32
  py-14
  xl:flex-row
  xl:space-x-48
  border
  border-b
  border-slate-400
`;

const NewsLetterLeftSide = tw.div`
  flex
  flex-col
  text-center
  xl:text-start
  xl:w-1/2
  space-y-2
`;

const NewsLetterRightSide = tw.div`
  flex
  flex-col
  items-center
  gap-2
  py-4
  xl:flex-row
  xl:w-1/2
  xl:space-x-6
`;

const ProductSection = tw.section`
  
`;