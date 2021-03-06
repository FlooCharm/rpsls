import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('game', function() {
    this.route('detail', { path: '/:id'});
  });
  this.route('user-select', { path: '/' });
});

export default Router;
