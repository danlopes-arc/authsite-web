import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { sytemReducer } from './system/reducer'
import { SystemAction } from './system/types'

const rootReducer = combineReducers({
  system: sytemReducer,
})

const w: any = window
const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store

export type AppState = ReturnType<typeof rootReducer>
export type AppAction = SystemAction
export type AppAsyncAction = ThunkAction<
  Promise<void>,
  AppState,
  any,
  AppAction
>
export type AppDispatch = ThunkDispatch<AppState, any, AppAction>