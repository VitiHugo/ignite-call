import { Checkbox, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { IntervalsBox, IntervalsContainer, IntervalsDay, IntervalsInputs, IntervalsItem } from "./styles";

export default function TimeIntervals() {

  return (
    <Container>
      <Header>
        <Heading as="strong">
          Quase lá!
        </Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da semana.
        </Text>

        <MultiStep size={4} currentStep={3}/>
      </Header>


      <IntervalsBox as="form">
        <IntervalsContainer>
          <IntervalsItem>
            <IntervalsDay>
              <Checkbox />
              <Text></Text>
            </IntervalsDay>
            <IntervalsInputs>
              <TextInput 
                size="sm"
                type="time"
                step={60}
              />
              <TextInput 
                size="sm"
                type="time"
                step={60}
              />
            </IntervalsInputs>
          </IntervalsItem>
        </IntervalsContainer>
      </IntervalsBox>

    </Container>
  )
}