import DS from 'ember-data';

var attr = DS.attr;

var post = DS.Model.extend({
  title: attr('string'),
  head: attr('string'),
  body: attr('string'),
  //project: DS.belongsTo('project', { async: true }),
  createdAt: attr('string', {
      defaultValue: function() { return new Date(); }
  })
});


post.reopenClass({
    FIXTURES: [
    {
        id: 1,
        title: 'ISSTH Chapter 1: Scholar Meng Hao',
        head: 'post leírása post leírása post leírása',
        body: 'The State of Zhao was a very small country. Like other small countries in the Nanshan Continent, its people admired the Great Tang in the Eastern Lands, and they admired Chang’an. Not only did the king carry this admiration, all scholars in the State of Zhao did. They could see it, almost as if they stood atop the Tower of Tang in the capital city, oh so far away.<br>This April was neither extremely cold, nor scorching hot. Light winds caressed the land, passing the Qiang Di flutes of the Northern Desert, blowing over the lands of the Great Tang. Under the twilight sky, it lifted the fog-like dust, then swirling, twisting, reached Mount Daqing in the State of Zhao. Then it fell onto a young man who sat there on the mountaintop.',
        //project: 1,
        createdAt: new Date(2014, 2, 2, 4, 0, 0)
    },
    {
        id: 2,
        title: 'ISSTH Chapter 2: The Reliance Sect',
        head: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
        body: 'post body Body Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
        //project: 1,
        createdAt: new Date(2014, 5, 4, 6, 0, 0)
    },
    {
        id: 3,
        title: 'ISSTH Chapter 3: Promotion to the Outer Sect',
        head: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
        body: 'post body Body Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
        //project: 1,
        createdAt: new Date(2015, 1, 2, 3, 0, 0)
    },
    {
        id: 4,
        title: 'MGA Chapter 1-8: Inner Court Disciple Exam (1-8)',
        head: 'post leírása post leírása',
        body: "Night. The round moon was hanging high and stars filled the sky.However, within the river of stars, there were 9-coloured lights lingering amongst them and they were especially dazzling.'Abnormal signs appear in the sky, which means a Divine Body will descend.'On the summit of the Imperial City in the Nine Provinces. An old man in golden clothes stood with his hand behind his back and he was looking up into the night sky.Behind him were tens of thousands of Imperial City experts. All of them were half-kneeled as if waiting for some command.*bzz* Suddenly, the lights condensed and formed into 9-coloured lightning. It came striking down from above the river of stars and the heavens.At that instant, the black night became a white day. Even before the strike of the lightning, the ground was already rumbling and fiercely trembling.",
        //project: 2,
        createdAt: new Date(2015, 2, 3, 1, 0, 0)
    },
    {
        id: 5,
        title: 'TNC Chapter 1: Teng Qing Shan',
        head: 'post leírása post leírása',
        body: 'The second floor of the Teahouse was very peaceful, gentle music that sounded like water flowing made people feel relaxed. There were not many people on the second floor of the Teahouse, only approximately ten or so. Groups of two or three people lowered their voice during their talks.There was suddenly a sound of footsteps from the stairs, drawing the attention of some guests. ...',
        //project: 3,
        createdAt: new Date(2015, 2, 3, 2, 0, 0)
    } 
  ]
});

export default post;
