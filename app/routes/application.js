import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {
            projects: this.store.findAll('project')
        };
    }
});
