import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postStartLoading } from '../../actions/postEvents';
import { PostItem } from './PostItem';

import postVoid from '../../img/undraw_void_3ggu.svg';
export const BlogScreen = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(postStartLoading());
  }, [dispatch]);

  return (
    <div className='animate__animated animate__fadeIn'>
      <div className='w-100 cover d-flex  justify-content-center'>
        <div style={{ marginTop: '-250px' }} className='ml-auto mr-auto'>
          <h1>
            <ins>Blog</ins>
          </h1>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='/home'>Home</Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Blog
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {posts.length === 0 && (
        <img src={postVoid} alt='postVoid' className='img-fluid' />
      )}

      <div className='row '>
        {posts.map(({ title, body, id, user_name, created, modified }) => (
          <PostItem
            title={title}
            body={body}
            id={id}
            user={user_name}
            created={created}
            modified={modified}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};
