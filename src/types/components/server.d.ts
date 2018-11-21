declare namespace Server {
    export interface IServer {
        getUserList_async(curSlnId: number): Promise<string[]>;
    }
}