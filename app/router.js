import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('game', { path: '/' }, function() {
    this.route('detail', { path: '/game/:id'});
    this.route('games', {path: '/:user_id/games'});
  });
});

export default Router;
