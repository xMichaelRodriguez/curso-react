import moment from 'moment';

import React, { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

import { useHistory, useParams } from 'react-router-dom';
import { fetchAsync } from '../../helpers/fetching';
import { LoadingScreen } from '../ui/LoadingScreen';

export const PostView = () => {
  const history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchAsync(`post/${id}`);
        const body = await data.json();

        if (body.ok) {
          setPost(body.post);
        }
      } catch (err) {
        console.log(err);
      }
    })();
    return () => {
      '';
    };
  }, []);

  return (
    <>
      {post.length < 1 && <LoadingScreen />}
      <div className='container animate__animated animate__fadeIn'>
        <blockquote className='blockquote'>
          <h1 className='mb-1'>{post.title}</h1>
          <footer className='blockquote-footer'>
            By:{post.user_name}{' '}
            <cite title='Source Title'>{moment(post.created).calendar()}</cite>
          </footer>
        </blockquote>
        <div className='card-body'>
          <p className='card-text'>{post.body}</p>
          <h5 className='font-weight-bold'>Comments</h5>
        </div>

        <form>
          <fieldset className='font-weight-bold'>Leave a reply</fieldset>
          <div className='row'>
            <div className='col-md-12 mb-2'>
              <textarea
                class='form-control'
                rows='3'
                placeholder='Your reply'
              ></textarea>
            </div>
            <div className='col-md-6 mb-2'>
              <input className='form-control' placeholder='Your Name' />
            </div>
            <div className='col-md-6 mb-2'>
              <input className='form-control' placeholder='Your Email' />
            </div>

            <div className='col-md-6'>
              <button className='btn primary' type='button'>
                Post Comment
              </button>
            </div>
          </div>
        </form>
        <div className='card-body'>
          <a href='#' class='card-link' onClick={() => history.goBack()}>
            <FaChevronLeft /> Return
          </a>
        </div>
      </div>
    </>
  );
};
