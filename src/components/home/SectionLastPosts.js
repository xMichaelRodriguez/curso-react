import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ItemLastPost } from './ItemLastPost';

export const SectionLastPosts = () => {
  const { lastedPost } = useSelector((state) => state.post);
  return (
    <div className='card mb-5'>
      <div className='card-body mb-3  '>
        <div className='d-flex w-100 justify-content-between mb-3'>
          <h2>Lastest Blog Posts</h2>
          <Link to='/blog' className='btn primary'>
            View All
          </Link>
        </div>
        <div className='list-group'>
          {lastedPost.map((itemPost) => (
            <ItemLastPost key={itemPost.id} {...itemPost} />
          ))}
        </div>
      </div>
    </div>
  );
};
