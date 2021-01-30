import styled from 'styled-components'

const Wrapper = styled.button`
  background: #FF6B6B;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  outline: none;
  padding: 1em 2em;
  width: 100%;
  -webkit-tap-highlight-color: rgba(0,0,0,0);

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

function Button ({ className, children, onClick }) {
  return (
    <Wrapper className={className} onClick={onClick}>
      <Text>{children}</Text>
    </Wrapper>
  )
}

export default styled(Button)``
