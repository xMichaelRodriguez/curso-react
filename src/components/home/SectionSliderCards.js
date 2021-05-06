import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Whirligig from "react-whirligig";
export const SectionSliderCards = () => {
  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();
  return (
    <div className="row">
      <div className="col-md-12 mb-3">
        <div>
          <Whirligig
            preventScroll={true}
            className="wid  "
            visibleSlides={3}
            gutter="1rem"
            slydeBy={2}
            ref={(_whirligigInstance) => {
              whirligig = _whirligigInstance;
            }}
          >
            <div className="m-2 shadow">
              <div className="card w-100  ">
                <div
                  className="px-3 d-flex justify-content-between text-muted mb-3 p-3"
                  style={{ fontSize: "14px" }}
                >
                  <div className="post-item-left-bar"></div>
                  <span className="primary-text">hola mundo</span>
                  <span>2021/05/05</span>
                </div>
                <div className="card-body ">
                  <h5 className="card-title">Ullamco id occaecat id sint.</h5>
                  <p className="card-text ">
                    Excepteur sit nulla adipisicing anim ex excepteur deserunt
                    ex. Cillum id id exercitation pariatur dolore non et magna
                    proident laboris ...
                  </p>
                </div>
                <div className="card-footer bg-secondary">
                  <button className="btn secondary ">Read More...</button>
                </div>
              </div>
            </div>

            <div className="m-2 shadow">
              <div className="card w-100 ">
                <div
                  className="px-3 d-flex justify-content-between text-muted mb-3 p-3"
                  style={{ fontSize: "14px" }}
                >
                  <div className="post-item-left-bar"></div>
                  <span className="primary-text">hola mundo</span>
                  <span>2021/05/05</span>
                </div>
                <div className="card-body ">
                  <h5 className="card-title">Ullamco id occaecat id sint.</h5>
                  <p className="card-text ">
                    Excepteur sit nulla adipisicing anim ex excepteur deserunt
                    ex. Cillum id id exercitation pariatur dolore non et magna
                    proident laboris ...
                  </p>
                </div>
                <div className="card-footer bg-secondary">
                  <button className="btn secondary ">Read More...</button>
                </div>
              </div>
            </div>

            <div className="m-2 shadow">
              <div className="card w-100 ">
                <div
                  className="px-3 d-flex justify-content-between text-muted mb-3 p-3"
                  style={{ fontSize: "14px" }}
                >
                  <div className="post-item-left-bar"></div>
                  <span className="primary-text">hola mundo</span>
                  <span>2021/05/05</span>
                </div>
                <div className="card-body ">
                  <h5 className="card-title">Ullamco id occaecat id sint.</h5>
                  <p className="card-text ">
                    Excepteur sit nulla adipisicing anim ex excepteur deserunt
                    ex. Cillum id id exercitation pariatur dolore non et magna
                    proident laboris ...
                  </p>
                </div>
                <div className="card-footer bg-secondary">
                  <button className="btn secondary ">Read More...</button>
                </div>
              </div>
            </div>

            <div className="m-2 shadow">
              <div className="card w-100 ">
                <div
                  className="px-3 d-flex justify-content-between text-muted mb-3 p-3"
                  style={{ fontSize: "14px" }}
                >
                  <div className="post-item-left-bar"></div>
                  <span className="primary-text">hola mundo</span>
                  <span>2021/05/05</span>
                </div>
                <div className="card-body ">
                  <h5 className="card-title">Ullamco id occaecat id sint.</h5>
                  <p className="card-text ">
                    Excepteur sit nulla adipisicing anim ex excepteur deserunt
                    ex. Cillum id id exercitation pariatur dolore non et magna
                    proident laboris ...
                  </p>
                </div>
                <div className="card-footer bg-secondary">
                  <button className="btn secondary ">Read More...</button>
                </div>
              </div>
            </div>

            <div className="m-2 shadow">
              <div className="card w-100 ">
                <div
                  className="px-3 d-flex justify-content-between text-muted mb-3 p-3"
                  style={{ fontSize: "14px" }}
                >
                  <div className="post-item-left-bar"></div>
                  <span className="primary-text">hola mundo</span>
                  <span>2021/05/05</span>
                </div>
                <div className="card-body ">
                  <h5 className="card-title">Ullamco id occaecat id sint.</h5>
                  <p className="card-text ">
                    Excepteur sit nulla adipisicing anim ex excepteur deserunt
                    ex. Cillum id id exercitation pariatur dolore non et magna
                    proident laboris ...
                  </p>
                </div>
                <div className="card-footer bg-secondary">
                  <button className="btn secondary ">Read More...</button>
                </div>
              </div>
            </div>

            <div className="m-2 shadow">
              <div className="card w-100 ">
                <div
                  className="px-3 d-flex justify-content-between text-muted mb-3 p-3"
                  style={{ fontSize: "14px" }}
                >
                  <div className="post-item-left-bar"></div>
                  <span className="primary-text">hola mundo</span>
                  <span>2021/05/05</span>
                </div>
                <div className="card-body ">
                  <h5 className="card-title">Ullamco id occaecat id sint.</h5>
                  <p className="card-text ">
                    Excepteur sit nulla adipisicing anim ex excepteur deserunt
                    ex. Cillum id id exercitation pariatur dolore non et magna
                    proident laboris ...
                  </p>
                </div>
                <div className="card-footer bg-secondary">
                  <button className="btn secondary ">Read More...</button>
                </div>
              </div>
            </div>
          </Whirligig>
          <div className="d-flex justify-content-center py-2">
            <button
              className="btn btn-secondary btn-lg w-25  mr-2"
              onClick={prev}
            >
              <FaChevronLeft />
            </button>
            <button
              className="btn btn-secondary btn-lg w-25 ml-2"
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
