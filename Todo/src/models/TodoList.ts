import ListItem from "./types";

interface List {
    list: ListItem[],
    show(): void,
    save(): void,
    clearList(): void,
    addItem(todo: ListItem): void,
    removeItem(id: number): void,
}

// export default class FullList implements List {
//     static instance: FullList = new FullList();
//     constructor(
//         private _list: ListItem[] = []) {
//     }
//     get list():ListItem[]{
//         return this._list
                
//     }
// }