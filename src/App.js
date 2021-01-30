import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { ChooseProviderPage } from './pages'

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
    <>
      <GlobalStyle />
      <ChooseProviderPage />
    </>
  )
}

export default App;
