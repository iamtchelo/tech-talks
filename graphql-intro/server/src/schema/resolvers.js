const {
  getUser,
  getRepos,
  getOrganization,
  getOrganizationRepos,
  getOrganizationMembers,
  getVideos
} = require('../api');

const resolvers = {
  Query: {
    user: (_, args, ctx, info) => {
      return getUser(args.username).then(response => response.data);
    },
    organization: (_, args, ctx, info) => {
      return getOrganization(args.username).then(response => response.data);
    },
    videos: (_, args, ctx, info) => {
      return getVideos(args.keyword).then(response => {
        const { data } = response;
        return data.items.map(video => ({
          id: video.id.videoId,
          channelId: video.snippet.channelId,
          publishedAt: video.snippet.publishedAt,
          title: video.snippet.title,
          description: video.snippet.description
        }))
      })
    }
  },
  User: {
    repositories: (user, _, ctx) => {
      return getRepos(user.login).then(response => response.data);
    }
  },
  Organization: {
    repositories: (organization, _, ctx) => {
      return getOrganizationRepos(organization.login).then(response => response.data);
    },
    members: (organization, _, ctx) => {
      return getOrganizationMembers(organization.login).then(response => response.data);
    }
  }
}

module.exports = resolvers;
