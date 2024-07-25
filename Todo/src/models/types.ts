export interface Todo {
    id: number,
    task: string,
    isDone: boolean
}

export default class ListItem implements Todo {
    _id: number;
    _task: string;
    _isDone: boolean
    constructor(_id: number, _task: string, _isDone: boolean) {
        this._id = _id;
        this._task = _task;
        this._isDone = _isDone;

        //In this particular scienerio the variable of the class i.e. _id,_task are going to be created for the class and it is implicitely initalised with the parameter value which is coming and then if we ahve implented any interface then we just have to use the varible of that interface.

    }
    get id(): number {
        return this._id
    }
    get task(): string {
        return this.task;
    }
    get isDone(): boolean {
        return this._isDone;
    }
    set id(id: number) {
        this._id = id;
    }
    set task(task: string) {
        this._task = task;
    }
    set isDone(isDone: boolean) {
        this._isDone = isDone;
    }

}

