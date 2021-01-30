import styled from 'styled-components'

import { Button, Logo, ProviderCheckboxGroup } from '../components'

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content auto auto;
  grid-gap: 2rem;
  justify-items: center;
  align-items: start;

  width: 100vw;
  height: 100vh;
  background: #292f36;
  padding: 1rem;

  ${Button} {
    align-self: center;
  }
`

export default function ChooseProviderPage () {
  return (
    <Wrapper>
      <Logo />
      <ProviderCheckboxGroup />
      <Button>Start</Button>
    </Wrapper>
  )
}