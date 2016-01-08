import DS from 'ember-data';

var attr = DS.attr;

var project = DS.Model.extend({
  title: attr('string'),
  body: attr('string'),
  posts: DS.hasMany('post', { async: true }),
  createdAt: attr('string', {
      defaultValue: function() { return new Date(); }
  })
});

project.reopenClass({
  FIXTURES: [
      {
          id: 1,
          title: 'I Shall Seal the Heavens',
          body: 'I Shall Seal the Heavens is currently one of the most popular xianxia stories in China. It is about a failed young scholar named Meng Hao who gets forcibly recruited into a Sect of Immortal Cultivators. In the Cultivation world, the strong prey on the weak, and the law of the jungle prevails. Meng Hao must adapt to survive. And yet, he never forgets the Confucian and Daoist ideals that he grew up studying. This, coupled with his stubborn nature, set him on the path of a true hero. What does it mean to “Seal the Heavens?”',
          posts: [1,2,3],
      },
      {
          id: 2,
          title: 'Martial God Asura',
          body: 'PRoject body MGA Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
          posts: [4],
      },
      {
          id: 3,
          title: 'The Nine Cauldrons, by I Eat Tomatoes',
          body: 'Ever since Emperor Yu cut through the hills and ruled the earth, the nation has been divided into nine states. So the earth was called the Nine States.  After Emperor Yu passed away, the world went into endless dispute.  One thousand years later, a brilliant man, Emperor Qinlin came along. He once split the Yan River with one hand. With his great power, he created a united world. However, the world fell into chaos again once Emperor Qinlin passed away and has never been unified again. ',
          posts: [5],
      },     
  ]
});

export default project;