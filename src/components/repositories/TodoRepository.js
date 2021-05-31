import Repository from './Repository'

const db = Repository({filename: 'db/todo.db', autoload: true})



export default {
    async index(query) {
        const findQuery = query || {};
        return new Promise((resolve, reject) => {
            db.find(findQuery, function (err, docs) {
                err ? reject(err) : resolve(docs)
            });
        })
    },
    async store(payload) {
        return new Promise((resolve, reject) => {
            db.insert(payload, function (err, doc) {
                err ? reject(err) : resolve(doc)
            });
        })
    },
    async show(id) {
        const query = {id: id};
        return new Promise((resolve, reject) => {
            db.findOne(query, function (err, doc) {
                console.log(doc);
                err ? reject(err) : resolve(doc)
            });
        })
    },
    async update(key, payload) {
        const query = {_id: key};
        return new Promise((resolve, reject) => {
            db.update(query, payload, {}, function (err, numReplaced) {
                err ? reject(err) : resolve(numReplaced)
            });
        })
    },
    async delete(key) {
        const query = {_id: key};
        return new Promise((resolve, reject) => {
            db.remove(query, {}, function (err, numRemoved) {
                err ? reject(err) : resolve(numRemoved)
            });
        })
    },
}
