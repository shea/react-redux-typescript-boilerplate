import * as React from 'react'
import Page from '../components/layout/Page'
import Container from '../components/layout/Container'
import styled from '../utils/styled'

export default () => (
  <Page>
    <Container>
      <PageContent>
        <h1>Welcome!</h1>

        <p>Welcome to the Redux + TypeScript boilerplate</p>
        <p>
          This project is based on{' '}
          <a
            href="https://github.com/resir014/react-redux-typescript-example"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-redux-typescript-example
          </a>{' '}
          by Resi Respati, example code for their excellent{' '}
          <a
            href="https://resir014.xyz/posts/2018/07/06/redux-4-plus-typescript/"
            target="_blank"
            rel="noopener noreferrer"
          >
            post on setting up React with Redux and TypeScript
          </a>
          .
        </p>
        <p>Enjoy your stay!</p>
      </PageContent>
    </Container>
  </Page>
)

const PageContent = styled('article')`
  max-width: ${props => props.theme.widths.md};
  margin: 0 auto;
  line-height: 1.6;

  a {
    color: ${props => props.theme.colors.brand};
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0.5rem;
    font-family: ${props => props.theme.fonts.headings};
    line-height: 1.25;
  }
`
