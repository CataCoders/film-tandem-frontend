import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { Button, Logo, ProviderCheckboxGroup } from './components'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
`

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

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Logo />
      <ProviderCheckboxGroup />
      <Button>Start</Button>
    </Wrapper>
  );
}

export default App;
