export function meetupsLoadRequest(date, page) {
  return {
    type: '@meetup/MEETUPS_LOAD_REQUEST',
    payload: { date, page },
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
export function meetupsLoadInfinitySuccess(meetups) {
  return {
    type: '@meetup/MEETUPS_LOAD_INFINITY_SUCCESS',
    payload: { meetups },
  };
}
export function meetupsLoadInfinityStop() {
  return {
    type: '@meetup/MEETUPS_LOAD_INFINITY_STOP',
  };
}
