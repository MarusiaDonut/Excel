import { ExcelComponent } from "@core/ExcelComponent";
import { shouldResize } from "./table.functions";
import { ResizeHandler } from "./table.resize";
import { createTable } from "./table.template";

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
    }

    toHTML() {
        return createTable(20)
    }

    onMousedown(event) {
        // console.log(event.target.getAttribute('data-resize'));
        if (shouldResize(event)) {
            ResizeHandler(this.$root, event)
        }
    }
}