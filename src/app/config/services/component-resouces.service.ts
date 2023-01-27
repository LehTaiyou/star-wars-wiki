import { Injectable } from '@angular/core';

import { ComponentResources } from './component-resources';
import { MdDialog } from '@angular/material';
import { Sort } from '@angular/material';

@Injectable()
export class ComponentResoucesService implements ComponentResources {
    /**
     * Creates an instance of ComponentResoucesService.
     * @param {MdDialog} dialog
     * @memberof ComponentResoucesService
     */
    constructor(
        private dialog: MdDialog,
    ) { }
    /**
     * Open a dialog
     *
     * @param {string} param
     * @param {*} component
     * @memberof ComponentResoucesService
     */
    showDialog(param: string, component: any): void {
        const dialogRef = this.dialog.open(component, {
            disableClose: false,
            width: '50%',
            data: {
                param: param
            }
        });
        dialogRef.afterClosed().subscribe((result: string) => {
            console.log('The dialog was closed ' + result);
        });
    }
    /**
     * Ordenação
     *
     * @param {any} sort
     * @param {*} data_source
     * @param {Array<string>} filds
     * @returns {Array<any>}
     * @memberof ComponentResoucesService
     */
    sortData(sort: { active: string; direction: string; }, data_source: any, filds: Array<string>): Array<any> {
        let sortedData;
        if (!sort.active || sort.direction === '') {
            sortedData = data_source;
          
        }
        sortedData = data_source.sort((a: { [x: string]: any; }, b: { [x: string]: any; }) => {
            const isAsc = sort.direction === 'asc';
            let result_sort = 0;
            filds.forEach(fild => {
                if (sort.active === fild) {
                    result_sort = this.compare(a[`${fild}`], b[`${fild}`], isAsc);
                }
            });
            return result_sort;
        });
        return sortedData;
    }
    /**
     * Sort
     *
     * @param {any} a
     * @param {any} b
     * @param {any} isAsc
     * @returns {number}
     * @memberof ComponentResoucesService
     */
    compare(a: number, b: number, isAsc: boolean): number {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}