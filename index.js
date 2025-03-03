require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const githubData = {
  login: "ezmobius",
  id: 5,
  node_id: "MDQ6VXNlcjU=",
  avatar_url: "https://avatars.githubusercontent.com/u/5?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/ezmobius",
  html_url: "https://github.com/ezmobius",
  followers_url: "https://api.github.com/users/ezmobius/followers",
  following_url: "https://api.github.com/users/ezmobius/following{/other_user}",
  gists_url: "https://api.github.com/users/ezmobius/gists{/gist_id}",
  starred_url: "https://api.github.com/users/ezmobius/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/ezmobius/subscriptions",
  organizations_url: "https://api.github.com/users/ezmobius/orgs",
  repos_url: "https://api.github.com/users/ezmobius/repos",
  events_url: "https://api.github.com/users/ezmobius/events{/privacy}",
  received_events_url: "https://api.github.com/users/ezmobius/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
