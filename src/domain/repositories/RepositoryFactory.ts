import RepositoryInterface from '@/domain/repositories/RepositoryInterface';
import {TodoRepository} from '@/domain/repositories/TodoRepository';


const repositories: { [key: string]: RepositoryInterface; } = {
    todo: TodoRepository,
};


export const RepositoryFactory = {
    get: (name: string): RepositoryInterface => {
        return repositories[name];
    },
};
