import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
posts:[],
isLoading: false,
post:{}
};

export const getById = createAsyncThunk("posts/getById", async (_id) => {
    try {
      return await postsService.getById(_id);
    } catch (error) {
      console.error(error);
    }
  });

  export const like = createAsyncThunk("posts/like", async (_id) => {
    try {
      return await postsService.like(_id);
    } catch (error) {
      console.error(error);
    }
  });  

  export const deslike = createAsyncThunk("posts/deslike", async (_id) => {
    try {
      return await postsService.deslike(_id);
    } catch (error) {
      console.error(error);
    }
  });  

  export const deletePost = createAsyncThunk("posts/deletePost", async (_id) => {
    try {
      return await postsService.deletePost(_id);
    } catch (error) {
      console.error(error);
    }
  });
  
  
export const getAll = createAsyncThunk("posts/getAll", async () => {
  try {
    return await postsService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getAll.fulfilled, (state, action) => {
        state.posts = action.payload;
      });
      builder.addCase(getAll.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getById.fulfilled, (state, action) => {
        state.post = action.payload;
      });  
      builder.addCase(deletePost.fulfilled, (state,action) => {
        state.posts = state.posts.filter((post) => post._id !== action.payload.post._id);
      });
      builder.addCase(like.fulfilled, (state, action) => {
        const posts = state.posts.map((post) => {
          if (post._id === action.payload._id) {
            post = action.payload;
          }
          return post
      })
      state.posts = posts
    });
    builder.addCase(deslike.fulfilled, (state, action) => {
      const posts = state.posts.map((post) => {
        if (post._id === action.payload._id) {
          post = action.payload;
        }
        return post
    })
    state.posts = posts
  });

    },
  });
  
  export const { reset } = postsSlice.actions;
  export default postsSlice.reducer;