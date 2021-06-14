import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
export const PostItem = ({ title, body, id, user, created }) => {
  const history = useHistory();
  return (
    <div className='col-md-4 mb-3 animate__animated animate__fadeIn'>
      <div className='card' style={{ width: '18rem' }}>
        <div className='px-3 text-muted mb-3 p-3' style={{ fontSize: '14px' }}>
          <div className='post-item-left-bar'></div>
          <div className=' row'>
            <div className='col-md-12'>
              <span className='primary-text'>By {user}</span>{' '}
              <span className=''>{moment(created).format('L')}</span>
              <br />
              <small className='text-muted'>Voluptate do</small>
            </div>
          </div>
        </div>

        <div className='card-body '>
          <h4 className='card-title text-break font-weight-bold'>{`${title.substr(
            0,
            60
          )} `}</h4>
          <p className='card-text  text-break'>{`${body.substr(
            0,
            120
          )} ...`}</p>
        </div>
        <div className='card-footer bg-secondary'>
          <button
            className='btn secondary '
            onClick={() => history.push(`/blog/${id}`)}
          >
            Read More...
          </button>
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.string,
  created: PropTypes.string,
};
