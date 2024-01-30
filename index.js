require("dotenv").config()

const express = require('express')
const app = express()
const port = 4000
let data={
    "login": "Sarveshreg",
    "id": 139812691,
    "node_id": "U_kgDOCFVfUw",
    "avatar_url": "https://avatars.githubusercontent.com/u/139812691?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Sarveshreg",
    "html_url": "https://github.com/Sarveshreg",
    "followers_url": "https://api.github.com/users/Sarveshreg/followers",
    "following_url": "https://api.github.com/users/Sarveshreg/following{/other_user}",
    "gists_url": "https://api.github.com/users/Sarveshreg/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Sarveshreg/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Sarveshreg/subscriptions",
    "organizations_url": "https://api.github.com/users/Sarveshreg/orgs",
    "repos_url": "https://api.github.com/users/Sarveshreg/repos",
    "events_url": "https://api.github.com/users/Sarveshreg/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Sarveshreg/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sarvesh Regmi",
    "company": null,
    "blog": "",
    "location": "St Louis, MO",
    "email": null,
    "hireable": null,
    "bio": "Aspiring Web Developer",
    "twitter_username": null,
    "public_repos": 20,
    "public_gists": 7,
    "followers": 1,
    "following": 1,
    "created_at": "2023-07-17T19:51:26Z",
    "updated_at": "2024-01-20T16:02:25Z"
    };

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('sarveshtwitter')
})

app.get('/git', (req, res) => {
    res.json(data);
})

app.get('/login', (req, res) => {
    res.send('<h2>PLease login!<h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})