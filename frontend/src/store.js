/* import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
import authReducer from './reducers/authReducer'
import commentReducer from './reducers/commentReducer'

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    notifications: notificationReducer,
    users: userReducer,
    authUser: authReducer,
    comments: commentReducer
  }
})

store.subscribe(() => {console.log(store.getState())})

export default store */

import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './reducers/blogReducer'
import categoryReducer from './reducers/categoryReducer'
import authReducer from './reducers/authReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    categories: categoryReducer,
    auth: authReducer,
    notifications: notificationReducer,
  }
})

store.subscribe(() => {console.log('store getstate', store.getState())})

export default store