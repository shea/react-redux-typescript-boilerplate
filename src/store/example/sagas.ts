import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { ExampleActionTypes } from './types'
import { fetchError, fetchSuccess } from './actions'
import { callApi } from '../../utils/api'

function* handleFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const response = yield call(callApi)

    if (response.error) {
      yield put(fetchError(response.error))
    } else {
      yield put(fetchSuccess(response))
    }
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchError(error.stack!))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(ExampleActionTypes.FETCH_REQUEST, handleFetch)
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* exampleSaga() {
  yield all([fork(watchFetchRequest)])
}

export default exampleSaga
