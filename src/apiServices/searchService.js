import * as request from "../ultis/request";

export const search = async (q) => {
  const res = await request.get(q);
  return res;
};

export const postComment = async (q, options) => {
  const res = await request.post(q, options);
  return res;
};
