import * as React from 'react'
import { connect } from 'react-redux'

import Page from '../components/layout/Page'
import Container from '../components/layout/Container'
import LoadingOverlay from '../components/data/LoadingOverlay'
import LoadingOverlayInner from '../components/data/LoadingOverlayInner'
import LoadingSpinner from '../components/data/LoadingSpinner'

import { ApplicationState, ConnectedReduxProps } from '../store'
import { fetchRequest } from '../store/example/actions'
import { Dispatch } from 'redux'

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  loading: boolean
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

class ExamplePage extends React.Component<AllProps> {
  public render() {
    const { loading } = this.props

    return (
      <Page>
        <Container>
          <button type="button" onClick={() => this.props.fetchRequest()}>
            Example
          </button>
          {loading && (
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
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ example }: ApplicationState) => ({
  loading: example.loading,
})

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest()),
})

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(mapStateToProps, mapDispatchToProps)(ExamplePage)
