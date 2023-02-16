import api from "./api";

const find = (id) => api.get(`/knights/${id}`);

const findAll = (filters) => api.get("/knights", { params: filters });

const create = (body) => api.post("/knights", body);

const update = (id, body) => api.patch(`/knights/${id}`, body);

const remove = (id) => api.delete(`/knights/${id}`);

export default {
  find,
  findAll,
  create,
  update,
  remove,
};
