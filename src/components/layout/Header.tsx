import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '../../utils/styled'
import Container from './Container'
import { css } from 'emotion'

// Interface for the props available on this component
interface Props {
  /** The header title text */
  title: string
}

/**
 * Page header component that accepts a title prop
 *
 * @param props
 */
const Header: React.FC<Props> = ({ title }) => (
  <Wrapper>
    <HeaderInner>
      <HeaderLeft>
        <Title>{title}</Title>
      </HeaderLeft>
      <HeaderNav>
        <HeaderNavLink exact to="/" activeClassName={HeaderLinkActive}>
          Home
        </HeaderNavLink>
        <HeaderNavLink to="/example" activeClassName={HeaderLinkActive}>
          Example
        </HeaderNavLink>
      </HeaderNav>
      <HeaderRight />
    </HeaderInner>
  </Wrapper>
)

export default Header

const Wrapper = styled('header')`
  padding: 0.5rem 1.5rem;
  background-color: ${(props) => props.theme.colors.brand};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.headings};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`

const HeaderLeft = styled('div')`
  padding-right: 1rem;
`

const HeaderNav = styled('nav')`
  flex: 1 1 auto;
  margin: 1rem 0;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin: 0;
  }
`

const HeaderNavLink = styled(NavLink)`
  margin: 0 1rem;
`

const HeaderLinkActive = css`
  text-decoration: underline;
`

const HeaderRight = styled('div')`
  padding-left: 1rem;
`

const Title = styled('h2')`
  margin: 0;
  font-weight: 500;
`
