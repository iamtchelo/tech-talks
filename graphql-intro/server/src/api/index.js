const { githubService, youtubeService } = require('./http-request');

const getUser = username => githubService.get(`/users/${username}`);

const getRepos = username => githubService.get(`/users/${username}/repos`);

const getOrganization = organization => githubService.get(`/orgs/${organization}`);

const getOrganizationRepos = organization => githubService.get(`/orgs/${organization}/repos`);

const getOrganizationMembers = organization => githubService.get(`/orgs/${organization}/members`);

const getVideos = keyword => youtubeService.get(keyword);

module.exports = {
  getUser,
  getRepos,
  getOrganization,
  getOrganizationRepos,
  getOrganizationMembers,
  getVideos
};
