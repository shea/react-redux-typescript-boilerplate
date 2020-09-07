import { Reducer } from 'redux'
import { getType } from 'typesafe-actions'
import { ExampleState } from './types'
import * as actions from './actions'

// Type-safe initialState!
const initialState: ExampleState = {
  data: [],
  errors: undefined,
  loading: false,
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
// eslint-disable-next-line @typescript-eslint/default-param-last
const exampleReducer: Reducer<ExampleState> = (state = initialState, action) => {
  switch (action.type) {
    case getType(actions.fetchRequest): {
      return { ...state, loading: true }
    }

    case getType(actions.fetchSuccess): {
      return { ...state, loading: false, data: action.payload }
    }

    case getType(actions.fetchError): {
      return { ...state, loading: false, errors: action.payload }
    }

    default: {
      return state
    }
  }
}

export default exampleReducer
