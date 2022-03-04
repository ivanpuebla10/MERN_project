import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
posts:[],
isError: false,
isSuccess: false,
message: "",
post:{}
};

export const getById = createAsyncThunk("posts/getById", async (_id) => {
    try {
      return await postsService.getById(_id);
    } catch (error) {
      console.error(error);
    }
  });

  export const getPostByName = createAsyncThunk("posts/getPostByName", async (postName) => {
    try {
      return await postsService.getPostByName(postName);
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

export const create = createAsyncThunk(
  "post/create",
  async (post, thunkAPI) => {
    try {
      return await postsService.create(post);
    } catch (error) {
      const message = error.response.data[0].message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
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
      state.post = action.payload
    });
    builder.addCase(deslike.fulfilled, (state, action) => {
      const posts = state.posts.map((post) => {
        if (post._id === action.payload._id) {
          post = action.payload;
        }
        return post
    })
    state.posts = posts
    state.post = action.payload
  });
  builder.addCase(create.fulfilled, (state, action) => {
    state.isSuccess = true;
    state.message = action.payload;
    state.posts = [action.payload ,...state.posts]
  })
  builder.addCase(create.rejected, (state, action) => {
    state.isError = true;
    state.message = action.payload;
  });
  builder.addCase(getPostByName.fulfilled, (state, action) => {
    state.posts = action.payload;
  });
    },
  });
  
  export const { reset } = postsSlice.actions;
  export default postsSlice.reducer;