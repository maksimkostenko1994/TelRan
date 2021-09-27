import {createStore} from 'redux'

import postReducer from './postReducer'

const store = createStore(postReducer)

export default store