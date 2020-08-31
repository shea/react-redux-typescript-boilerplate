import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Page from '../components/layout/Page'
import Container from '../components/layout/Container'
import LoadingOverlay from '../components/data/LoadingOverlay'
import LoadingOverlayInner from '../components/data/LoadingOverlayInner'
import LoadingSpinner from '../components/data/LoadingSpinner'
import { fetchRequest } from '../store/example/actions'
import { ApplicationState } from 'src/store'
import { ExampleState } from 'src/store/example/types'

/**
 * Example page component
 */
const ExamplePage: React.FC = () => {
  // Get the Redux dispatch function
  const dispatch = useDispatch()

  // Get the relevant part of the Redux store
  const store = useSelector<ApplicationState, ExampleState>((appState) => appState.example)

  // Return the page content
  return (
    <Page>
      <Container>
        <button type="button" onClick={() => dispatch(fetchRequest())}>
          Example
        </button>
        {store.loading && (
          <LoadingOverlay>
            <LoadingOverlayInner>
              <LoadingSpinner />
            </LoadingOverlayInner>
          </LoadingOverlay>
        )}
      </Container>
    </Page>
  )
}

export default ExamplePage
