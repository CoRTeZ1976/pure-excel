import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {$} from '../../core/Dom'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable(20)
  }

  onMousedown(event) {
    if (event.target.dataset.resize && event.buttons === 1) {
      const $resizer = $(event.target)
      $resizer.$el.classList.add('resizer-selected')
      const $parent = $resizer.closest('[data-type="resizable"]')
      const coords = $parent.getCoords()
      let delta = 0
      let value = 0
      console.log($resizer)

      document.onmousemove = e => {
        delta = e.pageX - coords.right
        value = coords.width + delta
        $resizer.$el.style.left += value
      }

      document.onmouseup = () => {
        document.onmousemove = null
        /* $resizer.$el.classList.remove('resizer-selected')*/
        $parent.$el.style.width = value + 'px'
      }
    }
  }
}