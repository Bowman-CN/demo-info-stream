
export class PageableResponse<T> {
    public content: Array<T> = [];
    public size: number = 5;
    public first: boolean = true;
    public number: number = 0;
    public last: boolean = false;
    public empty: boolean = false;

}