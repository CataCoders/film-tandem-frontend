import styled from 'styled-components'

import ImageCheckbox from './ImageCheckbox'

const Wrapper = styled.div`
  overflow-y: scroll;
  min-width: 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: 2rem;
`

const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 100;
  color: #FFF;
  margin: 0;
  margin-bottom: 2rem;
`

function ProviderCheckboxGroup({ className }) {
  return (
    <Wrapper className={className}>
      <Title>
        Pick your providers:
      </Title>
      <Grid>
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
      </Grid>
    </Wrapper>
  )
}

export default styled(ProviderCheckboxGroup)``