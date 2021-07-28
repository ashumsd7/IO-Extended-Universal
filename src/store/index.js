import { createStore } from 'vuex'
import axios  from 'axios'

export default createStore({
  state: {
    speakersWall:[],
  },
  mutations: {
    getSpeakersListMutation(state, payload) {
      // console.log(state,payload);
      // console.log("i recvd data in m,uattaion>", payload);
      state.speakersWall = payload;
    }
  },
  actions: {
    getSpeakersListAction(context) {
      // console.log("in get speakers wall action");
    axios
      .get("https://sessionize.com/api/v2/7h33x0zi/view/SpeakerWall", {
      })
      .then(function (response) {
        // console.log("this is res>>>");
        // console.log(response.data);

        let speakersData = [];
        for (let data of response.data) {
          // console.log(data);
          speakersData.push(data);
        }
        context.commit("getSpeakersListMutation", speakersData);
        // console.log("this is final data >", speakersData);
      });
      // 
    },
  },
  modules: {},
  getters: {
    getSpeakersWall(state) {
      return state.speakersWall;
    }
  },
});
