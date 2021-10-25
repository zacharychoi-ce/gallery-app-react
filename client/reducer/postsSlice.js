import request from 'superagent'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const res = await request('/api/v1/')
        if (res.ok) {
            return await res.body
        }
    }
)

export const createPost = createAsyncThunk(
    'posts/createPost',
    async (payload) => {
        const res = await request.post('/api/v1/createpost').send(payload)
        if (res.ok) {
            const newItem = {
                ...payload,
                id: res.body.id
            }
            return newItem
        }
    }
)

export const deletePost = createAsyncThunk(
    'posts/deleteItems',
    async (payload) => {
        const res = await request.delete(`/api/v1/posts/${payload.id}`)
        if (res.ok) {
            return { id: payload.id }
        }
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {},
    extraReducers: {
        [getPosts.pending]: (state, action) => {
        },
        [getPosts.fulfilled]: (state, action) => {
            return action.payload.posts
        },
        [createPost.fulfilled]: (state, action) => {
            state.push(action.payload)
        },
        [deletePost.fulfilled]: (state, action) => {
            return state.filter(post => post.id !== action.payload.id)
        }
    }
})

export default postsSlice.reducer
