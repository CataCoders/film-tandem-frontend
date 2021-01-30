import styled from 'styled-components'

import { IconCheck } from './IconCheck'

const Wrapper = styled.label`
  position: relative;
  width: 128px;
  height: 128px;
  background: rgba(255, 230, 109, 0.8);
  border-radius: 24px;
  display: block;
  overflow: hidden;
  cursor: pointer;
  user-select: none;

  transition: background 300ms;

  &:hover {
    background: rgba(255, 230, 109, 1);
  }
`

const HiddenCheckboxInput = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`

const Image = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const CheckOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(42, 157, 143, 0.8);
  transform: scale(4);
  opacity: 0;

  transition-property: transform opacity;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);

  ${HiddenCheckboxInput}:checked ~ & {
    transform: none;
    opacity: 1;
  }
`

export function ImageCheckbox ({
  checked,
  imageUrl,
  imageAltText,
  onChange
}) {
  return (
    <Wrapper aria-label={imageAltText}>
      <HiddenCheckboxInput
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <Image
        src={imageUrl}
        alt={imageAltText}
      />
      <CheckOverlay>
        <IconCheck />
      </CheckOverlay>
    </Wrapper>
  )
}

ImageCheckbox.defaultProps = {
  onChange: () => {}
}