import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('about');
  this.route('posts', function() {
    this.route('post', { path: '/:post_id'});
    this.route('new', { path: '/new/:projectid'});
  });

  this.route('projects', function() {
    this.route('list');
    this.route('project', { path: '/:id'});
    this.route('new');
  });
});

export default Router;
