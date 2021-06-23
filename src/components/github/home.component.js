import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getRepo, getFollowers, getFollowing } from "../../actions/github";

function GithubHome(props) {
  const [count, setCount] = useState(0);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [username] = useState("pritamkhose");

  useEffect(() => {
    props
      .getRepo(username)
      .then((reponse) => {
        setRepos(reponse);
      })
      .catch((e) => {
        console.log(e);
      });

    props
      .getFollowers(username)
      .then((reponse) => {
        setFollowers(reponse);
      })
      .catch((e) => {
        console.log(e);
      });
    props
      .getFollowing(username)
      .then((reponse) => {
        setFollowing(reponse);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <hr />
      <h3>Repos</h3>
      {repos &&
        repos.map((obj, index) => (
          <div className="card" key={"repo" + index}>
            <h4>{obj.name}</h4>
            {obj.description !== null ? <p>{obj.description}</p> : null}
          </div>
        ))}
      <hr />
      <h3>Followers</h3>
      {followers &&
        followers.map((obj, index) => (
          <li key={"followers" + index}>{obj.login}</li>
        ))}
      <hr />
      <h3>Following</h3>
      {following &&
        following.map((obj, index) => (
          <li key={"following" + index}>{obj.login}</li>
        ))}
    </div>
  );
}

export default connect(null, {
  getRepo,
  getFollowers,
  getFollowing,
})(GithubHome);
