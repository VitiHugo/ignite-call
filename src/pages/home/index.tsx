import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/img/app-preview.png'
import { ClaimUserNameForm } from './components/ClaimUserNameFomr'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendario  e permita que as pessoas
          marquem agendamentos no seu tempo livre.
        </Text>

        <ClaimUserNameForm />
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendario simbolizando a aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
