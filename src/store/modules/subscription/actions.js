export function subscriptionLoadRequest() {
  return {
    type: '@subscription/LOAD_REQUEST',
  };
}

export function subscriptionLoadSuccess(subscriptions) {
  return {
    type: '@subscription/LOAD_SUCCESS',
    payload: { subscriptions },
  };
}

export function subscriptionLoadFailure() {
  return {
    type: '@subscription/LOAD_FAILURE',
  };
}

// --
export function subscriptionNewRequest(id) {
  return {
    type: '@subscription/NEW_REQUEST',
    payload: { id },
  };
}

export function subscriptionDeleteRequest(id) {
  return {
    type: '@subscription/Delete_REQUEST',
    payload: { id },
  };
}

export function subscriptionDeleteSuccess(id) {
  return {
    type: '@subscription/Delete_SUCCESS',
    payload: { id },
  };
}
