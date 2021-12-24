export default {
  setUser(state, payload) {
    if (payload.hasOwnProperty('token')) {
      state.user.token = payload.token
    }
  },
  setCurpage(state, payload) {
    if (payload.hasOwnProperty('page_path')) {
      state.curpage.page_path = payload.page_path
    }
  },
  setAvatar(state, payload) {
    if (payload.hasOwnProperty('img_name')) {
      state.avatar.img_name = payload.img_name
    }
  }
}
