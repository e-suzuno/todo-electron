import RepositoryInterface from '@/domain/repositories/RepositoryInterface';
import Repository from '@/domain/repositories/Repository';

const db = Repository({filename: 'db/todo.db', autoload: true});


export const TodoRepository: RepositoryInterface = {
    async index(query: object) {
        const findQuery = query || {};
        return new Promise((resolve, reject) => {
            db.find(findQuery, (err: Error | null, docs: object) => {
                err ? reject(err) : resolve(docs);
            });
        });
    },
    async store(payload: object) {
        return new Promise((resolve, reject) => {
            db.insert(payload, (err: object | null, doc: object) => {
                err ? reject(err) : resolve(doc);
            });
        });
    },
    async show(key: string) {
        const query = {_id: key};
        return new Promise((resolve, reject) => {
            db.findOne(query, (err: Error | null, doc: object) => {
                err ? reject(err) : resolve(doc);
            });
        });
    },
    async update(key: string, payload: object) {
        const query = {_id: key};
        return new Promise((resolve, reject) => {
            db.update(query, payload, {}, (err: Error | null, numberOfUpdated: number) => {
                err ? reject(err) : resolve(numberOfUpdated);
            });
        });
    },
    async delete(key: string) {
        const query = {_id: key};
        return new Promise((resolve, reject) => {
            db.remove(query, {}, (err: Error | null, numRemoved: number) => {
                err ? reject(err) : resolve(numRemoved);
            });
        });
    },
};

