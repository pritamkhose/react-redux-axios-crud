import { REPO_GITHUB, FOLLOWERS_GITHUB, FOLLOWING_GITHUB } from "./types";

import GithubDataService from "../services/github.service";

export const getRepo = (username) => async (dispatch) => {
  try {
    const res = await GithubDataService.getRepo(username);

    dispatch({
      type: REPO_GITHUB,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getFollowers = (username) => async (dispatch) => {
  try {
    const res = await GithubDataService.getFollowers(username);

    dispatch({
      type: FOLLOWERS_GITHUB,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getFollowing = (username) => async (dispatch) => {
  try {
    const res = await GithubDataService.getFollowing(username);

    dispatch({
      type: FOLLOWING_GITHUB,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
