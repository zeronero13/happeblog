import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newPost(projectid) {
            //create new post under :projectid
            
            var post = this.store.createRecord('post', {
                title: Ember.$('[name="title"]').val(),
                head: Ember.$('[name="head"]').val(),
                body: Ember.$('[name="body"]').val()
            });
            var store= this.store; //!!!

            //alert('1');
            post.save().then(function (postFromServer) {
                //alert(projectid);
                //alert(postFromServer.get('id'));
                
                store.findRecord('project', projectid).then(function(projectFromServer) {

                    projectFromServer.get('posts').pushObject(postFromServer);
                    projectFromServer.save();

                });
            });

            //serializáció def. route-jába is kell hozzá
            this.transitionToRoute('projects.project', store.find('project', projectid));


        }
    }
});
//http://baruch.lubinsky.co.za/post/2014/08/beerdemo/
//https://github.com/suchitpuri/emberjs-essentials/blob/master/chapter-6/example1/app/routes/books/new.js
//http://www.iteye.com/news/30894
/*

    actions: {
        newPost(projectid) {
            //create new post under :projectid
            var post = this.store.createRecord('post', {
                title: Ember.$('[name="title"]').val(),
                head: Ember.$('[name="head"]').val(),
                body: Ember.$('[name="body"]').val()
            });

            //alert('1');
            this.store.find('project', projectid).then(function(project) {
                //alert(project.id);

                 project.get('posts').addObject(post);
                 post.save().then( 
                     function() {
                         project.save().then(function(){
                            //post.set('project', project);
                         });

                     }
                 );

            });

            //serializáció def. route-jába is kell hozzá
            this.transitionToRoute('projects.project', this.store.find('project', projectid));


        }
    }

*/