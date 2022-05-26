import * as request from "../ultis/request";

export const search = async (q) => {
  const res = await request.get(q);
  return res;
};
