import Ember from 'ember';

export default Ember.Controller.extend({
    isEditing: false,
    actions: {
        edit() {
                this.set('isEditing', true);
            },

            doneEditing(id) {
                this.set('isEditing', false);
                this.store.find('project', id)
                    .then(function(project) {
                        project.set('title', Ember.$('[name="title"]').val());
                        project.set('body', Ember.$('[name="body"]').val());
                        project.save();
                    });
            },

            deletePost(post, project) {
                var store = this.store; //!!!
                //alert(post.id);

                store.find('post', post.get('id')).then(function(_post) {
                    //alert(project.get('id'));
                    project.get('posts').then(function(_posts){
                        _posts.removeObject(_post);
                        project.save().then(function(){
                            _post.destroyRecord();
                        });
                    });

                });

            }
    }
});

/*                    store.find('project', _post.project).then(function() {
                        //alert(_project.id);
                        _project.get('posts').removeObject(_post).then(function() {
                            _project.save().then(function() {
                                post.destroyRecord();
                                post.save();
                            });
                        });

                    });
                    
*/