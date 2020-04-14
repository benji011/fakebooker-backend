const testResolvers = require("./hello");
const usersResolvers = require("./users");
const postsResolvers = require("./posts");
const commentsResolvers = require("./comments");
const likesResolvers = require("./likes");
const dateResolvers = require("./date");
const notificationsResolvers = require("./notifications");
const aboutResolvers = require("./about");
const imageResolvers = require("./images");

module.exports = {
  Query: {
    ...testResolvers.Query,
    ...usersResolvers.Query,
    ...postsResolvers.Query,
    ...likesResolvers.Query,
    ...notificationsResolvers.Query,
    ...aboutResolvers.Query,
    ...imageResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
    ...likesResolvers.Mutation,
    ...notificationsResolvers.Mutation,
    ...aboutResolvers.Mutation,
    ...imageResolvers.Mutation,
  },
  Date: {
    ...dateResolvers.Date,
  },
  Subscription: {
    ...notificationsResolvers.Subscription,
  },
};