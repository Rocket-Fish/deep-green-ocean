export const state = () => ({
  url: 'https://api.deepgreenocean.com'
})

export const mutations = {
  set(state, apiUrl) {
    state.url = apiUrl
  }
}
