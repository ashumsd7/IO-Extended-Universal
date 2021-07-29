import { createStore } from 'vuex'
import axios  from 'axios'

export default createStore({
  state: {
    speakersWall: [],
    eventTimeline: [],
  },
  mutations: {
    getSpeakersListMutation(state, payload) {
      // console.log(state,payload);
      // console.log("i recvd data in m,uattaion>", payload);
      state.speakersWall = payload;
    },
    getTimeSlotsWithDetailsMutation(state, payload) {
      state.eventTimeline = payload;
          // alert("call");
      // console.log(state.eventTimeline);
    },
  },
  actions: {
    getSpeakersListAction(context) {
      // console.log("in get speakers wall action");
      axios
        .get("https://sessionize.com/api/v2/7h33x0zi/view/SpeakerWall", {})
        .then(function(response) {
          // console.log("this is res>>>");
          // console.log(response.data);

          let speakersData = [];
          for (let data of response.data) {
            // console.log(data);
            speakersData.push(data);
          }
          context.commit("getSpeakersListMutation", speakersData);
          context.dispatch("getTimeSlotsWithDetailsAction");
          
          // console.log("this is final data >", speakersData);
        });
      //
    },
    getTimeSlotsWithDetailsAction(context) {
      // alert("time is called")
         
      axios
        .get("https://sessionize.com/api/v2/7h33x0zi/view/GridSmart", {})
        .then(function(response) {
          // console.log("this is res of time >>>");
          let slots = response.data[0].timeSlots;
          let eventTimeline = [];
          for (let slot of slots) {
            let speakersSlot = {
              slotStart: slot.slotStart,
              eventId: slot.rooms[0].session.id,
              liveUrl: slot.rooms[0].session.liveUrl,
              recordingUrl: slot.rooms[0].session.recordingUrl,
              endsAt: slot.rooms[0].session.endsAt,
              description: slot.rooms[0].session.description,
              speakersId: slot.rooms[0].session.speakers[0].id,
              title: slot.rooms[0].session.title,
              speakersName: slot.rooms[0].session.speakers[0].name,
            };

            let speakersWall = context.getters.getSpeakersWall;
            // console.log("speakersWasll>>" ,speakersWall);
            for (let speaker of speakersWall) {
              if(slot.rooms[0].session.speakers[0].id== speaker.id)
              {
                speakersSlot.profilePicture = speaker.profilePicture;
               
              }
            }
            eventTimeline.push(speakersSlot);
            // console.log(eventTimeline);
          }
          context.commit("getTimeSlotsWithDetailsMutation", eventTimeline);

          // for (let i of response.data.) {
          //   console.log(i.timeSlots);
          // }
          // context.commit("getSpeakersListMutation", speakersData);
        });
      //
    },
  },
  modules: {},
  getters: {
    getSpeakersWall(state) {
      return state.speakersWall;
    },
    getEventTimeline(state) {
      return state.eventTimeline;
    },
  },
});
