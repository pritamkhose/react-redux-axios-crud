import http from "../http-common";

// const GITHUB_BASE_URL = "https://api.github.com";
const GITHUB_BASE_URL = "http://localhost:8080";

class GithubDataService {
  getRepo(username) {
    return http.get(`${GITHUB_BASE_URL}/users/${username}/repos`);
  }

  getFollowers(username) {
    return http.get(`${GITHUB_BASE_URL}/users/${username}/followers`);
  }

  getFollowing(username) {
    return http.get(`${GITHUB_BASE_URL}/users/${username}/following`);
  }
}

export default new GithubDataService();
