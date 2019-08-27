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

// --

export function meetupLoadRequest(id) {
  return {
    type: '@meetup/MEETUP_LOAD_REQUEST',
    payload: { id },
  };
}
export function meetupLoadSuccess(meetup) {
  return {
    type: '@meetup/MEETUP_LOAD_SUCCESS',
    payload: { meetup },
  };
}
export function meetupLoadFailure() {
  return {
    type: '@meetup/MEETUP_LOAD_FAILURE',
  };
}

// --
export function meetupDeleteRequest(id) {
  return {
    type: '@meetup/MEETUP_DELETE_REQUEST',
    payload: { id },
  };
}

// --
export function meetupCreateRequest(meetup) {
  return {
    type: '@meetup/MEETUP_CREATE_REQUEST',
    payload: { meetup },
  };
}

// --
export function meetupUpdateRequest(meetup) {
  return {
    type: '@meetup/MEETUP_UPDATE_REQUEST',
    payload: { meetup },
  };
}
