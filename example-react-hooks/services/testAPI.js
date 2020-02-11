import { API } from '../configures/axios'

async function getPosts() {
  return API.get(`/posts?limit=10&skip=0`)
}

export default {
  getPosts,
}
