import {
  getProfileId,
  getProfileList,
  addProfile,
  editProfile,
  deleteProfile,
} from '../../utils/fetch';
import { FAILED, LOADING, SUCCESS } from './constants';

export const fetchProfile = () => (dispatch) => {
  const key = 'Profile';

  dispatch(loadingAction(true, key));

  getProfileList()
    .then((data) => {
      dispatch(successAction(data.data, key));
    })
    .catch((err) => {
      dispatch(failedAction(err.message, key));
    });
};

export const fetchAddProfile = (data) => (dispatch) => {
  const key = 'AddProfile';

  dispatch(loadingAction(true, key));
  addProfile(data)
    .then(() => {
      dispatch(failedAction('SUCCESSADD', key));
    })
    .catch((err) => {
      dispatch(failedAction(err.message, key));
    });
};

export const fetchDeleteProfile = (id) => (dispatch) => {
  const key = 'Delete';
  dispatch(loadingAction(true, key));

  deleteProfile(id)
    .then(() => {
      dispatch(failedAction('SUCCESSDELETE', key));
      dispatch(failedAction('', key));
    })
    .catch((err) => {
      dispatch(failedAction(err.message, key));
    });
};

export const fetchUpdateProfile = (id, data) => (dispatch) => {
  const key = 'Update';

  dispatch(loadingAction(true, key));
  editProfile(id, data)
    .then(() => {
      dispatch(failedAction('SUCCESSUPDATE', key));
      dispatch(failedAction('', key));
    })
    .catch((err) => {
      dispatch(failedAction(err.message, key));
    });
};

function failedAction(message, key) {
  return { type: FAILED, message, key };
}

function loadingAction(isLoading, key) {
  return { type: LOADING, isLoading, key };
}

function successAction(data, key) {
  return { type: SUCCESS, data, key };
}
