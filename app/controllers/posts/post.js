import Ember from 'ember';

export default Ember.Controller.extend({
    isEditing: false,
    actions: {

        edit() {
            this.set('isEditing', true);
        },

        doneEditing(id) {
            this.set('isEditing', false);
            //update post
            this.store.find('post', id)
                .then(function (post) {
                    post.set('title', Ember.$('[name="title"]').val() );
                    post.set('head', Ember.$('[name="head"]').val() );
                    post.set('body', Ember.$('[name="body"]').val() );
                    post.save();

            });
        }
    }
});