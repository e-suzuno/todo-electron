import TodoRepository from "@/components/repositories/TodoRepository";

const repositories = {
    todo: TodoRepository,
};


/**
 *
 * @type {{get: (function(*): *)}}
 */
export const RepositoryFactory = {
    get: name => repositories[name]
};