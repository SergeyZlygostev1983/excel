import {ExcelComponent} from '../../modules/ExcelComponent';
import {createTable} from './table.template';
import {resizeHandler} from './table.resize';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            // listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
            listeners: ['mousedown'],
        });
    }

    toHTML() {
        return createTable(20);
    }

    // onClick() {
    //     console.log('click');
    // }

    onMousedown(event) {
        if (event.target.dataset.resize) {
            resizeHandler(this.$root, event);
        }
    }

    // onMousemove() {
    //     console.log('mousemove');
    // }

    // onMouseup() {
    //     console.log('mouseup');
    // }
}