import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
export const ItemLastPost = ({ id, user_name, title, body, created }) => {
  return (
    <>
      <div
        className='list-group-item list-group-item-action border-0'
        style={{ cursor: 'pointer' }}
      >
        <div className='row'>
          <div className='col-md-2'>imagen</div>
          <div className='col-md-7'>{body}</div>
          <div className='col-md-3'>
            <div className='border-left text-muted h-100  '>
              <ul
                className='list-group ml-3'
                style={{
                  fontSize: '12px',
                  listStyle: 'none',
                }}
              >
                <li className='text-muted border-0 py-1'># sason 1</li>
                <li className='text-muted border-0 py-1'>
                  # {moment(created).format('LL')}
                </li>
                <li className='text-muted border-0 py-1'># goobye</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
ItemLastPost.propTypes = {
  id: PropTypes.string,
  user_name: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  created: PropTypes.string,
};
