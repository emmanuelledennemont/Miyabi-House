import { Container } from '@/ui/components/container/container';
import Image from 'next/image';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Typography } from '@/ui/design-system/typography/typography';

const DeliveryContent = {
  text: {
    title: 'Delivery everywhere in your city',
    description:
      'Hungry ? You are in the right place ...? Order from!',
  },

  image: {
    img1: '/assets/svg/fondpromo 1.svg',
    img2: '/assets/svg/calig.svg',
  },
};


export const DeliveryPart = () => {
  return (

    <Container className='py-20 relative mt-10'>
      <div className="mx-auto">
        <Image
          src={DeliveryContent.image.img2}
          alt="illustration caligraphie japonaise"
          width={550}
          height={90}
          className="object-cover w-full absolute -z-50 top-0 left-0 right-0 bottom-0 mx-auto"
          priority
        />
        <div className="lg:flex gap-4 ">

          <div className=" w-full lg:w-7/12  bg-beigebg-200 p-4 rounded mb-6 ">

            <div className='flex'>
              <Player
                autoplay
                loop
                src="https://lottie.host/4a71b6e2-2ff4-46b7-b74a-5831f78ea031/z6yDCsww1z.json"
                style={{ height: '200px', width: '200px', margin: '0', padding: '0' }}
              >
              </Player>
              <div>
                <Typography
                  variant="h3"
                  component="h2"
                  className="flex items-start justify-center text-4xl lg:text-5xl font-bold"
                >
                  {DeliveryContent.text.title}
                </Typography>
                <Typography
                  variant="body-base"
                  component="p"
                  className="mt-4 mb-4 lg:text-md text-center lg:text-left"
                >
                  {DeliveryContent.text.title}
                </Typography>
              </div>
            </div>
          </div>


          <div className="w-full lg:w-5/12 bg-beigebg-200 p-4 rounded">
            {/* Contenu de la deuxième partie */}
            <p>Contenu de la deuxième partie</p>
            <Image
              src={DeliveryContent.image.img1}
              alt="illustration paysage japonais"
              width={30}
              height={30}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </Container >



  )

}