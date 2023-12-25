/* import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'
import loginService from '../services/login'
import { setNotification } from './notificationReducer'

const authSlice = createSlice({
  name: 'auth',
  initialState: [],
  reducers: {
    initUser(state, action){
      return action.payload
    },
    loginUser(state, action){
      return action.payload
    },
    logoutUser(){
      return null
    }
  }

})

export const { initUser, loginUser, logoutUser } = authSlice.actions

export const initializeUser = () => {
  return async dispatch => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(initUser(user))
      blogService.setToken(user.token)
    }
  }
}

export const login = (username, password) => {
  return async dispatch => {
    try {
      const user = await loginService.login({
        username,
        password,
      })

      window.localStorage.setItem('loggedBloglistUser', JSON.stringify(user))

      blogService.setToken(user.token)

      dispatch(loginUser(user))
      dispatch(setNotification(`${user.username} successfully logged in`, 5))
    } catch (exception) {
      dispatch(setNotification('Wrong username or password', 5))
    }}
}

export const logout = () => {
  return async dispatch => {
    window.localStorage.clear()
    dispatch(logoutUser())
  }
}

export default authSlice.reducer */

import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'
import authService from '../services/auth'

const authSlice = createSlice({
  name: 'auth',
  initialState: [],
  reducers: {
    registerUser(state, action) {
      return action.payload
    }
  }
})

export const { registerUser } = authSlice.actions

export const register = (username, email, password) => {
  return async (dispatch) => {

    const user = await authService.register({
      username,
      email,
      password,
    })

    window.localStorage.setItem('loggedBloglistUser', JSON.stringify(user))
    blogService.setToken(user.token)

    dispatch(registerUser(user))

  }
}

export default authSlice.reducer

