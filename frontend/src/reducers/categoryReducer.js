import { createSlice } from '@reduxjs/toolkit'
import categoryService from '../services/categories'

const categorySlice = createSlice({
  name: 'category',
  initialState: [],
  reducers: {
    setCategory(state, action){
      return action.payload
    }
  }
})

export const { setCategory } = categorySlice.actions

export const initializeCategories = () => {
  return async dispatch => {
    const categories = await categoryService.getAll()
    dispatch(setCategory(categories))
  }
}

export default categorySlice.reducer