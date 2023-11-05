import { Container } from '@/ui/components/container/container';
import { Button } from '@/ui/design-system/button/button';
import { Typography } from '@/ui/design-system/typography/typography';
import Image from 'next/image';

const heroContent = {
  text: {
    title: 'TASTES THE TRADITION OF JAPAN',
    description:
      'Miyabi House is a Japanese restaurant offering the best of Japanese cuisine, with a diverse menu featuring sushi, sashimi, ramen, and more. Our chefs use fresh, high-quality ingredients to create authentic flavors.',
    button: 'Order Now',
  },
  image: {
    img1: '/assets/svg/hero.svg',
    img2: '/assets/svg/Group 20.svg',
    img3: '/assets/svg/Group 8.svg',
    img4: '/assets/svg/fondjapon1 1.svg',
    img5: '/assets/svg/ramen1 1.svg',
    img6: '/assets/svg/sushi2 1.svg',
    img7: '/assets/svg/mochi1 1.svg',
  },
};

export const HeroTopView = () => {
  return (
    // <Container className="relative pt-[55px] pb-[55px] overflow-hidden max-w-3xl">
    //   <div className="flex gap-2 mx-auto w-full max-w-12xl">
    //     <div className="grid grid-cols-1 gap-y-1 lg:grid-cols-1 lg:grid-rows-[auto,2fr] lg:gap-y-2">
    //       <div className="flex flex-col lg:col-span-1">
    //         <div className="mx-auto w-full max-w-3xl lg:px-8 text-center">
    //           <Typography variant="h1" component="h1" className="mx-w-lg">
    //             TASTES THE TRADITION OF JAPAN
    //           </Typography>
    //         </div>
    //         <div className="mx-auto w-full max-w-4xl lg:px-2 text-center m-[24px]">
    //           <Typography variant="body-base" component="p" className="mx-w-lg">
    //             Miyabi House is a Japanese restaurant offering the best of
    //             Japanese cuisine, with a diverse menu featuring sushi, sashimi,
    //             ramen, and more. Our chefs use fresh, high-quality ingredients to
    //             create authentic flavors.
    //           </Typography>
    //         </div>
    //         <div className="mx-auto mb-6">
    //           <Button size="lg" variant="secondary" className="mx-auto">
    //             Order Now
    //           </Button>
    //         </div>
    //         <div className="mx-auto lg:max-w-3xl">
    //           <Image
    //             src="/assets/svg/hero.svg"
    //             alt="illustration soupe ramen avec truffe"
    //             width={620}
    //             height={470}
    //             className="z-0 mt-5 mx-[-35px]"
    //             priority
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className='lg:col-span-1 mx-auto w-full max-w-lg'>
    //       <form className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-4 mb-8 mx-auto'>
    //         <Typography variant="h3" component="h3" className="mx-w-lg">
    //           Subscribe to our newsletter
    //         </Typography>
    //         <Typography variant="body-base" component="p" className="mx-w-lg">
    //           Get the latest news and updates from Miyabi House
    //         </Typography>
    //         <div className="flex flex-col mt-6">
    //           <label htmlFor="email" className="text-sm font-semibold">
    //             Email
    //           </label>
    //           <input
    //             type="email"
    //             name="email"
    //             id="email"
    //             className="py-2 px-4 rounded-md border border-zinc-100 dark:border-zinc-700/40"
    //           />
    //         </div>
    //       </form>

    //       <div className='lg:col-span-1'>
    //         <div className="mx-auto w-full max-w-2xl lg:px-2 text-center rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-4 mb-8">
    //           <Typography variant="body-base" component="p" className="mx-w-sm">
    //             Miyabi House is a Japanese restaurant offering the best of
    //             Japanese cuisine, with a diverse menu featuring sushi, sashimi,
    //             ramen, and more. Our chefs use fresh, high-quality ingredients to
    //             create authentic flavors.
    //           </Typography>
    //           <Typography variant="body-base" component="p" className="mx-w-sm">
    //             Miyabi House is a Japanese restaurant offering the best of
    //             Japanese cuisine, with a diverse menu featuring sushi, sashimi,
    //             ramen, and more. Our chefs use fresh, high-quality ingredients to
    //             create authentic flavors.
    //           </Typography>
    //           <Typography variant="body-base" component="p" className="mx-w-sm">
    //             Miyabi House is a Japanese restaurant offering the best of
    //             Japanese cuisine, with a diverse menu featuring sushi, sashimi,
    //             ramen, and more. Our chefs use fresh, high-quality ingredients to
    //             create authentic flavors.
    //           </Typography>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Container >
    <>
      <Container className="py-20 relative">
        <div className="px-4 mx-auto">
          <Image
            src={heroContent.image.img2}
            alt="illustration soupe ramen illustration sushi baguettes et spécialités japonaises"
            width={300}
            height={300}
            className="object-cover absolute top-[120px] left-[-110px] -z-40"
            priority
          />
          <div className="lg:flex justify-between gap-[20px] ">
            <div className="lg:w-6/12 mb-10 lg:mb-0">
              <Typography
                variant="h1"
                component="h1"
                className="text-4xl lg:text-5xl mb-6"
              >
                {heroContent.text.title}
              </Typography>
              <Typography
                variant="body-base"
                component="p"
                className="mb-10 leading-relaxed"
              >
                {heroContent.text.description}
              </Typography>
              <Button size="lg" variant='secondary' className="mx-auto">
                {heroContent.text.button}
              </Button>

              <div className="lg:w-2/12 space-y-2 absolute bottom-20 left-[490px]">
                {heroContent.image.img1 && (
                  <Image
                    src={heroContent.image.img1}
                    alt="futur video"
                    width={90}
                    height={96}
                    className="h-full w-full max-w-xl p-3  bg-beigebg-200 rounded rounded-4xl"
                    priority
                  />
                )}
              </div>

            </div>


            <div className="lg:w-6/12 space-y-2">
              <div className="flex space-x-2 items-stretch justify-end">
                <div className="w-7/12">
                  {heroContent.image.img1 && (
                    <Image
                      src={heroContent.image.img1}
                      alt="illustration soupe ramen avec truffe"
                      width={297}
                      height={206}
                      className="h-full w-full max-w-xl p-3 bg-beigebg-200 rounded rounded-4xl"
                      priority
                    />
                  )}
                </div>
                <div className="w-4/12 self-end space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {heroContent.image.img5 && (
                      <Image
                        src={heroContent.image.img5}
                        alt="illustration sushi baguettes et spécialités japonaises"
                        width={290}
                        height={230}
                        className="object-cover h-full w-full bg-beigebg-200 p-2 rounded rounded-2xl"
                        priority
                      />
                    )}
                    <div className="bg-secondary/60 rounded-tr-[200px] rounded-2xl"></div>
                  </div>
                  {heroContent.image.img4 && (
                    <Image
                      src={heroContent.image.img4}
                      alt="illustration sushi baguettes et spécialités japonaises"
                      width={380}
                      height={380}
                      className="object-cover h-full w-full bg-primary-100/80 p-3 rounded rounded-2xl"
                      priority
                    />
                  )}

                  <Image
                    src={heroContent.image.img3}
                    alt="illustration sushi baguettes et spécialités japonaises"
                    width={230}
                    height={230}
                    className="object-cover absolute top-[150px] right-[-96px] -z-40 items-end"
                    priority
                  />
                </div>
              </div>

              <div className="flex space-x-2 items-stretch justify-end">
                <div className="w-4/12">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-secondary/60 rounded-bl-[200px] rounded-2xl"></div>
                    {heroContent.image.img7 && (
                      <Image
                        src={heroContent.image.img7}
                        alt="illustration sushi baguettes et spécialités japonaises"
                        width={230}
                        height={230}
                        className="object-cover h-full w-full bg-primary-100/80 p-0 rounded rounded-2xl"
                        priority
                      />
                    )}
                  </div>
                </div>
                <div className="w-2/12 max-h-[114px]">
                  {heroContent.image.img6 && (
                    <Image
                      src={heroContent.image.img6}
                      alt="illustration sushi baguettes et spécialités japonaises"
                      width={200}
                      height={200}
                      className="object-cover max-h-full max-w-full bg-beigebg-200  p-0 rounded rounded-2xl"
                      priority
                    />
                  )}

                </div>

              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
