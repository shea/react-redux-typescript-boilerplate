import * as React from 'react'
import styled from '../../utils/styled'

interface Props {
  className?: string
}

const Root: React.FC<Props> = ({ children }) => <Wrapper>{children}</Wrapper>

export default Root

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.body};
  font-family: ${(props) => props.theme.fonts.body};
`
