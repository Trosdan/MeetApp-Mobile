export function meetupsLoadRequest() {
  return {
    type: '@meetup/MEETUPS_LOAD_REQUEST',
  };
}
export function meetupsLoadSuccess(meetups) {
  return {
    type: '@meetup/MEETUPS_LOAD_SUCCESS',
    payload: { meetups },
  };
}
export function meetupsLoadFailure() {
  return {
    type: '@meetup/MEETUPS_LOAD_FAILURE',
  };
}
