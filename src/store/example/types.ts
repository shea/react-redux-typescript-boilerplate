// Response example object
export interface ExampleResponse {
  example: boolean
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface ExampleState {
  readonly loading: boolean
  readonly data: ExampleResponse[]
  readonly errors?: string
}
