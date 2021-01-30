import styled from 'styled-components'

const Wrapper = styled.button`
  background: #FF6B6B;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  outline: none;
  padding: 1em 2em;
  width: 100%;

  transition: background 300ms;

  &:hover {
    background: #CA3A3A;
  }
`

const Text = styled.span`
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
`

export function Button ({ children, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <Text>{children}</Text>
    </Wrapper>
  )
}
