import {DomListener} from '@core/DomListener'
export class ExcelComponent extends DomListener {
  constructor($root, option = {}) {
    super($root, option.listeners)
  }
  toHTML() {
    return ''
  }
  init() {
    this.initDOMListeners()
  }
}
