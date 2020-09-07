import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'
import { callApi } from '../../utils/api'
import * as actions from './actions'

function* handleFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const response = yield call(callApi)

    if (response.error) {
      // Dispatch a new action with `put()`.
      yield put(actions.fetchError(response.error))
    } else {
      yield put(actions.fetchSuccess(response))
    }
  } catch (error) {
    if (error instanceof Error) {
      yield put(actions.fetchError(error.stack!))
    } else {
      yield put(actions.fetchError('An unknown error occured.'))
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(getType(actions.fetchRequest), handleFetch)
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* exampleSaga() {
  yield all([fork(watchFetchRequest)])
}

export default exampleSaga
