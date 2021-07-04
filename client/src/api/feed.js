import api from './api'

const feedAPI = {
  getAll(page) {
    return api.get(`/articles?page=${page}`)
    // return api.get(`/articles?page=${page}aaa`)
  },
}

export default feedAPI
