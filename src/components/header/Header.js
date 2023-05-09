import {ExcelComponent} from '@core/ExcelComponent'

export class Header extends ExcelComponent {
  static className = 'excel__header'
  toHTML() {
    return `
    <input type="text" value="New table" class="excel__header-input"/>
            <div class="excel__header-buttonBlock">
                <span class="material-icons button">delete</span>
                <span class="material-icons button">close</span>
            </div>
    `
  }
}
