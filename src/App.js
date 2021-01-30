import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { Button, ProviderCheckboxGroup } from './components'

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

function App() {
  return (
    <main>
      <GlobalStyle />
      <ProviderCheckboxGroup />
      <Button>Start</Button>
    </main>
  );
}

export default App;
