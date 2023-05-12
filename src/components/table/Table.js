import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from "@/components/table/table.template";
import { $ } from "../../core/Dom";

export class Table extends ExcelComponent {
  static className = "excel__table";

  constructor($root) {
    super($root, {
      listeners: ["click", "mousedown", "mousemove", "mouseup"],
    });
  }

  toHTML() {
    return createTable(20);
  }

  onClick() {}

  onMousedown(event) {
    const $resizer = $(event.target);
    const $parent = $resizer.closest('[data-type="resizable"]');
    console.log($parent);
    console.log($parent.$el.clientWidth);
    $parent.$el.offsetWidth *= 2;
  }

  onMousemove(event) {}

  onMouseup() {}
}
