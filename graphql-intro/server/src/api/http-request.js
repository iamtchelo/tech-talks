const axios = require('axios');

const {
  TIMEOUT,
  GITHUB_TOKEN,
  YOUTUBE_TOKEN
} = process.env;

const githubService = axios.create({
  baseURL: 'https://api.github.com',
  timeout: TIMEOUT,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`
  }
});

const youtubeService = axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_TOKEN}&type=video&part=snippet&maxResults=20&q=`,
  timeout: TIMEOUT
});

module.exports = {
  githubService,
  youtubeService
};
