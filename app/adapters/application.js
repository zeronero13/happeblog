/*import DS from 'ember-data';

export default DS.FixtureAdapter.extend({
});*/

import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://happeblog-api-hhutter13.c9users.io',
    namespace: 'api/v1'
});
