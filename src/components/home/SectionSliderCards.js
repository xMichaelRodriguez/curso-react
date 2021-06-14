import moment from 'moment';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Whirligig from 'react-whirligig';
export const SectionSliderCards = () => {
  const history = useHistory();
  const { posts } = useSelector((state) => state.post);
  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();
  return (
    <div className='row'>
      <div className='col-md-12 mb-3'>
        <div>
          <Whirligig
            preventScroll={true}
            className='wid  '
            visibleSlides={3}
            gutter='1rem'
            ref={(_whirligigInstance) => {
              whirligig = _whirligigInstance;
            }}
          >
            {posts.map((p) => (
              <div className='m-2 shadow' key={p.id}>
                <div className='card w-100  '>
                  <div
                    className=' row px-3 text-muted mb-3 p-3'
                    style={{ fontSize: '14px' }}
                  >
                    <div className='post-item-left-bar'></div>
                    <div className='col-md-6'>
                      <span className='primary-text'>{p.user_name}</span>
                    </div>
                    <div className='col-md-6 '>
                      <span className='float-right'>
                        {moment(p.created).format('L')}
                      </span>
                    </div>
                  </div>
                  <div className='card-body '>
                    <h5 className='card-title'>{p.title}</h5>
                    <p className='card-text '>{`${p.body.substr(
                      0,
                      100
                    )}...`}</p>
                  </div>
                  <div className='card-footer bg-secondary'>
                    <button
                      className='btn secondary '
                      onClick={() => history.push(`/blog/${p.id}`)}
                    >
                      Read More...
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Whirligig>
          <div className='d-flex justify-content-center py-2'>
            <button
              className='btn btn-secondary btn-lg w-25  mr-2'
              onClick={prev}
            >
              <FaChevronLeft />
            </button>
            <button
              className='btn btn-secondary btn-lg w-25 ml-2'
              onClick={next}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
