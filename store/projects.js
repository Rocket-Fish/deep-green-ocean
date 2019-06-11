export const state = () => ({
  list: [],
  // id : {description, links, etc.}
  idToFullDescription: {}
})

export const mutations = {
  list(state, data) {
    state.list = data
  }
}

export const actions = {
  async getFullDescriptionConditionally({ commit, state, rootState }, id) {
    if (typeof state.idToFullDescription[id] === 'undefined') {
      const data = await this.$axios.$get(`${rootState.api.url}/projects/${id}`)
      state.idToFullDescription[id] = data
    }
  }
}
