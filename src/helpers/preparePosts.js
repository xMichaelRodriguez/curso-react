import moment from "moment";

export const preparePost = (post = []) => {
  console.log(post);
  return post.map((e) => ({
    ...e,
    created: moment(e.created).format("ll"),
    modified: moment(e.modified).format("ll"),
  }));
};
