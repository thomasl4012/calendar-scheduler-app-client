import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },
  get(endPoint) {
    return this.service.get(endPoint);
  },
  removeUser(userId) {
    return service
      .delete(`api/user/${userId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  patch(endPoint, data) {
    return this.service.patch(endPoint, data);
  },
  post(endPoint, data) {
    return this.service.post(endPoint, data);
  },

  delete(endPoint, data) {
    return this.service.delete(endPoint, data);
  },
};
