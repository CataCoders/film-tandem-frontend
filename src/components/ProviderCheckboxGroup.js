import styled from 'styled-components'

import { ImageCheckbox } from './ImageCheckbox'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: 2rem;
  min-width: 0;
`

export function ProviderCheckboxGroup() {
  return (
    <Wrapper>
      <ImageCheckbox
        imageUrl='/assets/img/vendor-netflix.svg'
        imageAlt='Netflix'
      />
      <ImageCheckbox
        imageUrl='/assets/img/vendor-disneyplus.svg'
        imageAlt='Disney Plus'
      />
      <ImageCheckbox
        imageUrl='/assets/img/vendor-hbo.svg'
        imageAlt='HBO'
      />
      <ImageCheckbox
        imageUrl='/assets/img/vendor-primevideo.svg'
        imageAlt='Amazon Prime Video'
      />
    </Wrapper>
  )
}