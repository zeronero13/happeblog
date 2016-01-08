import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newProject() {
            var store = this.store;
            var projectData = {};
            //alert(project_id);
            projectData.title = Ember.$('[name="title"]').val();
            projectData.body = Ember.$('[name="body"]').val();

            var project = store.createRecord('project', projectData);
            project.save();
            //console.log(project);
            
            this.transitionToRoute('projects.list'); 
        }
    }
});