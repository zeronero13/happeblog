import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {
            posts: this.store.findAll('post')
        };
    }
});
