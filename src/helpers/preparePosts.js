import moment from 'moment';

export const preparePost = (post = []) => {
  return post.map((e) => ({
    ...e,
    created: moment(e.created).format('L'),
    modified: moment(e.modified).format('L'),
  }));
};
