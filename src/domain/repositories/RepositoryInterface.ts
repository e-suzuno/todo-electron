interface RepositoryInterface {

    index(query: object): Promise<any>;

    store(payload: object): Promise<any>;

    show(key: string): Promise<any>;

    update(key: string, payload: object): Promise<any>;

    delete(key: string): Promise<any>;

}


export default RepositoryInterface;
