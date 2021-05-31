const Datastore = require('nedb');

export default (resource) => {
    return new Datastore(resource);
}