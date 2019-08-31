import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
  loading: false,
  loadInfinity: true,
};

export default function Meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/MEETUPS_LOAD_REQUEST':
        draft.loading = true;
        if (action.payload.page === 1) {
          draft.meetups = [];
        }
        break;
      case '@meetup/MEETUPS_LOAD_SUCCESS':
        draft.meetups = action.payload.meetups;
        draft.page = action.payload.page;
        draft.loading = false;
        draft.loadInfinity = true;
        break;
      case '@meetup/MEETUPS_LOAD_INFINITY_SUCCESS':
        draft.meetups = [...draft.meetups, ...action.payload.meetups];
        draft.loading = false;
        break;
      case '@meetup/MEETUPS_LOAD_INFINITY_STOP':
        draft.loading = false;
        draft.loadInfinity = false;
        break;
      case '@meetup/MEETUPS_LOAD_FAILURE':
        draft.loading = false;
        draft.loadInfinity = false;
        break;
      default:
    }
  });
}
