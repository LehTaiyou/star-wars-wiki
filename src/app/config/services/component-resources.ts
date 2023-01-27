/**
 *
 *
 * @export
 * @interface ComponentResource
 */
 export interface ComponentResources {
    showDialog(param: string, component: any): void;
    sortData(sort: any, data_source: any, filds: Array<string>): Array<any>;
    compare(a: any, b: any, isAsc: boolean): number;
}