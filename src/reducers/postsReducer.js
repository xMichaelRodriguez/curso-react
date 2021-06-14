import { types } from '../types/types';

const initialState = {
  posts: [],
  lastedPost: [],
  activePost: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.postSetActive:
      return {
        ...state,
        activePost: action.payload,
      };

    case types.postAddNew:
      return {
        ...state,
        posts: [...state.post, action.payload],
      };
    case types.postStartLoading:
      return {
        ...state,
        lastedPost: [...state.posts],
      };
    case types.ClearActivePost:
      return {
        ...state,
        activePost: null,
      };

    case types.postUpdated:
      return {
        ...state,
        posts: state.Posts.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.PostDeleted:
      return {
        ...state,
        posts: state.Posts.filter((e) => e.id !== state.activePost.id),
        activePost: null,
      };

    case types.PostLoaded:
      return {
        ...state,
        posts: [...action.payload],
      };

    case types.PostLogout:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
