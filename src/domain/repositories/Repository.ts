import Nedb from 'nedb';

export default (resource: object) => {
    return new Nedb(resource);
};
