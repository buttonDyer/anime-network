import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const endpoint = process.env.REACT_APP_ENDPOINT || ''

export const addPost = createAsyncThunk(
  'post/savePost',
  async ({ postImage, postTitle, postText }) => {
    try {
      const response = await fetch(`${endpoint}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postImage,
          postTitle,
          postText,
        }),
      })
      if (!response.ok) {
        throw new Error('Server error!')
      }
      const data = await response.json()
      return data
    } catch (error) {
      throw new Error('Failed to save post!')
    }
  }
)

const initialState = {
  posts: [],
  loading: false,
  error: null,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.loading = false
        state.posts.push(action.payload)
      })
      .addCase(addPost.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default postsSlice.reducer
