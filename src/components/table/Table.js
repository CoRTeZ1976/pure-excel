import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
    })
  }

  toHTML() {
    return createTable(20)
  }

  onClick() {
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      console.log('Start resizing', event.target.dataset.resize, event)
      const obj = event.target.parentNode
      console.log(obj.clientWidth)
      console.log(obj.clientHeight)
      /*      console.log(obj.pageY)
      console.log(event.pageY)*/
      console.log(obj.offsetWidth)
      console.log(obj.style.width)
      obj.style.width += toString(obj.offsetWidth)
      // console.log(obj.getAttribute())
      // eslint-disable-next-line guard-for-in
      /* for (const objKey in obj) {
        console.log(objKey)
      }*/
    }
  }

  onMousemove(event) {
    /* if (event.target.dataset.resize) {
      console.log('Resizing', event.target.dataset.resize, event)
    }*/
  }

  onMouseup() {
  }
}
