import { fetchAsync, fetchSync } from '../helpers/fetching';
import { preparePost } from '../helpers/preparePosts';
import { types } from '../types/types';
import { setError } from './uiActions';

export const startpostsAddNew = (post) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;
    try {
      const resp = await fetchAsync('post', post, 'POST');
      const body = await resp.json();

      if (body.ok) {
        post.id = body.savedPost.id;
        post.user = {
          id: uid,
          name,
        };

        dispatch(postsAddNew(post));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const postsAddNew = (posts) => ({
  type: types.postAddNew,
  payload: posts,
});

// export const postsSetActive = (posts) => ({
//   type: types.postsSetActive,
//   payload: posts,
// });

// export const postsClearActiveposts = () => ({
//   type: types.postsClearActiveposts,
// });

// export const postsStartUpdated = (posts) => {
//   return async (dispatch) => {
//     try {
//
//       const resp = await fetchAsync(`postss/${posts.id}`, posts, "PUT");
//       const body = await resp.json();

//       if (body.ok) {
//         dispatch(postsUpdated(posts));
//
//
//       } else {
//
//       }
//     } catch (error) {
//
//       console.log(error);
//     }
//   };
// };

// const postsUpdated = (posts) => ({
//   type: types.postsUpdated,
//   payload: posts,
// });

// export const startpostsDeleted = () => {
//   return async (dispatch, getState) => {
//     const { id } = getState().calendar.activeposts;
//     try {
//

//       const resp = await fetchAsync(`postss/${id}`, {}, "DELETE");
//       const body = await resp.json();

//       if (body.ok) {
//         dispatch(postsDeleted());
//
//
//       } else {
//
//       }
//     } catch (error) {
//
//       console.log(error);
//     }
//   };
// };

// const postsDeleted = () => ({ type: types.postsDeleted });

export const postStartLoading = () => {
  return async (dispatch) => {
    try {
      let post = [];
      const resp = await fetchSync('post');
      const body = await resp.json();

      if (body.ok) {
        post = await preparePost(body.post);

        dispatch(startpostsLoaded(post));
      } else {
        dispatch(setError(body.msg));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

const startpostsLoaded = (posts) => ({
  type: types.PostLoaded,
  payload: posts,
});

// export const postsLogout = () => ({ type: types.postsLogout });
