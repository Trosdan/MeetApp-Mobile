import produce from 'immer';

const INITIAL_STATE = {
  subscriptions: [],
  loading: false,
};

export default function subscription(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@subscription/LOAD_REQUEST':
        draft.loading = true;
        break;
      case '@subscription/LOAD_SUCCESS':
        draft.subscriptions = action.payload.subscriptions;
        draft.loading = false;
        break;
      case '@subscription/LOAD_FAILURE':
        draft.loading = false;
        break;
      case '@subscription/Delete_SUCCESS':
        draft.subscriptions = draft.subscriptions.filter(
          data => data.id !== action.payload.id
        );
        break;

      default:
        break;
    }
  });
}
