export const state = () => ({
  list: []
})

export const mutations = {
  list(state, data) {
    state.list = data
  }
}
