import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return {
            projectid: params.projectid,
            project: this.store.find('project', params.projectid)
        };
    },
    serialize: function(model) {
        return model;
    }
});
