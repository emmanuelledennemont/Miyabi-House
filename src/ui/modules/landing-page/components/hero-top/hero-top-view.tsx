import { Container } from '@/ui/components/container/container';
import { Button } from '@/ui/design-system/button/button';
import { Typography } from '@/ui/design-system/typography/typography';
import Image from 'next/image';

export const HeroTopView = () => {
  return (
    <Container className="relative pt-[55px] pb-[55px] overflow-hidden">
      <div className="flex">
        <div className="flex flex-col px-20">
          <div className="mx-auto w-full max-w-3xl lg:px-8 text-center">
            <Typography variant="h1" component="h1" className="mx-w-lg">
              TASTES THE TRADITION OF JAPAN
            </Typography>
          </div>
          <div className="mx-auto w-full max-w-4xl lg:px-8 text-center m-[24px]">
            <Typography variant="body-base" component="p" className="mx-w-lg">
              Miyabi House is a Japanese restaurant offering the best of Japanese
              cuisine, with a diverse menu featuring sushi, sashimi, ramen, and
              more. Our chefs use fresh, high-quality ingredients to create
              authentic flavors.
            </Typography>
          </div>
          <div className='mx-auto mb-6'>
            <Button size='lg' variant="secondary" className="mx-auto">
              Order Now
            </Button>
          </div>
          <div className="mx-auto lg:max-w-3xl">
            <Image
              src="/assets/svg/hero.svg"
              alt="illustration soupe ramen avec truffe"
              width={620}
              height={470}
              className="z-0 mt-5 mx-[-40px]"
            />
          </div>
        </div>

      </div>
    </Container>
  );
};
