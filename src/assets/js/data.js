import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  // state放置的是数据 类似于之前的data  this.$store.state.数据名字
  state: {
    shows: false, //true 播放
    xians: false,
    num: 0,
    bang: ' ',
    str: ' '
  },
  //   mutations放置的是方法。类似之前的methods this.$store.commit('方法名',k,k)k代表的是参数
  mutations: {
    change(state) {
      state.shows = !state.shows
    },
    top(state,s){
      state.bang = s
    },
    up(state) {
      state.shows = true
    },
    ups(state) {
      state.shows = false
    },
    changes(state) {
      state.xians = !state.xians
    },
    down(state) {
      state.xians = false
    },
    jia(state) {
      state.num = parseInt(state.num + 1)
    }, 
    jian(state,n) {
      if (n <= 0) {
        state.num = 0
      }
      else {
        state.num = parseInt(state.num - 1)
      }
    },
    fuzhi(state,n){
      state.num = n
    },
    qucan(state,m){
      state.str = m
    }

  }
})