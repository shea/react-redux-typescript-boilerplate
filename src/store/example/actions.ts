import { createAction } from 'typesafe-actions'
import { ExampleResponse } from './types'

export const fetchRequest = createAction('@@example/FETCH_REQUEST')()
export const fetchSuccess = createAction('@@example/FETCH_SUCCESS')<ExampleResponse[]>()
export const fetchError = createAction('@@example/FETCH_ERROR')<string>()
export const defaultAction = createAction('')()
