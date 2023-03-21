import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: window.localStorage.getItem('user' || '[]') == null ? '未登录' : JSON.parse(window.localStorage.getItem('user' || '[]')).name,
      userface: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userface,
      username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username,
      roles: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).roles
    },
    routes: [],
    msgList: [],
    currentFriend: {},
    stomp: null,
    token: window.sessionStorage.getItem('token') == null ? '' : JSON.parse(window.sessionStorage.getItem('token')),
  },
  mutations: {
    initMenu(state, menus){
      state.routes = menus;
    },
    login(state, user){
      state.user = user;
      console.log('装进local前')
      console.log(JSON.stringify(user))
      window.localStorage.setItem('user', JSON.stringify(user));
    },
    logout(state){
      window.localStorage.removeItem('user');
      state.routes = [];
    },
    updateMsgList(state, newMsgList){
      state.msgList = newMsgList;
    },
    updateCurrentFriend(state, newFriend){
      state.currentFriend = newFriend;
    },
    storeToken(state,token){
      state.token = token;
      window.sessionStorage.setItem('token', JSON.stringify(token));
    }
  }
});
