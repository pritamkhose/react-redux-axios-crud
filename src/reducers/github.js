import {
  REPO_GITHUB,
  FOLLOWERS_GITHUB,
  FOLLOWING_GITHUB,
} from "../actions/types";

const initialState = {
  REPO_GITHUB: [],
  FOLLOWERS_GITHUB: [],
  FOLLOWING_GITHUB: [],
};

function githubReducer(githubObj = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REPO_GITHUB:
      githubObj.REPO_GITHUB = payload;
      return githubObj;

    case FOLLOWERS_GITHUB:
      githubObj.FOLLOWERS_GITHUB = payload;
      return githubObj;

    case FOLLOWING_GITHUB:
      githubObj[FOLLOWING_GITHUB] = payload;
      return githubObj;

    default:
      return githubObj;
  }
}

export default githubReducer;
