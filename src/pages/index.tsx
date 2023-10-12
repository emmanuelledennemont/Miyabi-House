import { Container } from '@/ui/components/container/container'
import { Navigation } from '@/ui/components/navigation/navigation'
import { Seo } from '@/ui/components/seo/seo'
import { Avatar } from '@/ui/design-system/avatar/avatar'
import { Button } from '@/ui/design-system/button/button'
import { Logo } from '@/ui/design-system/logo/logo'
import { Spinner } from '@/ui/design-system/spinner/spinner'
import { Typography } from '@/ui/design-system/typography/typography'
import { AiOutlineUser } from 'react-icons/ai'


export default function Home() {
  return (
    <>

      <Seo title='Miyabi House' description='Miyabi House' />
      <Navigation />
      <Container className="space-y-10 py-10">
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
        <Logo size='lg' variant='secondary' />
        <Logo size='md' />
        <Logo size='sm' />
        <Logo size='xs' />
        <Avatar size='xs' src="/assets/images/avatarf.png" alt="Avatar de l'utilisateur" />
        <Avatar size='sm' src="/assets/images/avatarf.png" alt="Avatar de l'utilisateur" />
        <Avatar size='md' src="/assets/images/avatarf.png" alt="Avatar de l'utilisateur" />
        <Avatar size='lg' src="/assets/images/avatarf.png" alt="Avatar de l'utilisateur" />

        <main>
          <Typography text="primary" variant="display" component="h1">
            Tastes the tradition of Japan
          </Typography>
        </main>
      </Container>
    </>
  )
}
