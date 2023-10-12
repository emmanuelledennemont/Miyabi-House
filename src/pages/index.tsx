import { Seo } from '@/ui/components/seo'
import { Button } from '@/ui/design-system/button/button'
import { Spinner } from '@/ui/design-system/spinner/spinner'
import { Typography } from '@/ui/design-system/typography/typography'
import { AiOutlineUser } from 'react-icons/ai'


export default function Home() {
  return (
    <>
      <Seo title='Miyabi House' description='Miyabi House' />
      <div className='flex items-center gap-4 p-10'>
        <Button size='sm' variant='secondary'>Order now</Button>
        <Button isLoading size='md' variant='primary'>Order now</Button>
        <Button size='lg' variant='disabled'>Order now</Button>
        <Button variant='beige'>Order now</Button>
        <Button variant='outline'>Outline</Button>
        <Button size='sm' variant='icon' icon={{ icon: AiOutlineUser }} icontheme='outline' />
        <Button size='md' variant='icon' icon={{ icon: AiOutlineUser }} icontheme='secondary' />
        <Button size='lg' variant='icon' icon={{ icon: AiOutlineUser }} icontheme='primary' />
        <Button size='sm' variant='icon' icon={{ icon: AiOutlineUser }} icontheme='beige' />
        <Button size='md' variant='icon' icon={{ icon: AiOutlineUser }} icontheme='social' />
      </div>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />

      <main>
        <Typography text="primary" variant="display" component="h1">
          Tastes the tradition of Japan
        </Typography>
      </main>
    </>
  )
}
