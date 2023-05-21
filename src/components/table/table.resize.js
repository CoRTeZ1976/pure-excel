import {$} from '@core/Dom'

export function resizeHandler($root, event) {
  return new Promise(resolve => {
    const $resizer = $(event.target)
    $resizer.addClass('resizer-selected')
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    let delta = 0
    let value = 0
    const elType = $resizer.data.resize

    document.onmousemove = e => {
      if (elType === 'col') {
        delta = e.pageX - coords.right
        value = coords.width + delta
        $resizer.css({right: -delta + 'px'})
      } else {
        delta = e.pageY - coords.bottom
        value = coords.height + delta
        $resizer.css({bottom: -delta + 'px'})
      }
    }

    document.onmouseup = () => {
      document.onmousemove = null
      document.onmouseup = null

      if (elType === 'col') {
        $root.findAll(`[data-col="${ $parent.data.col }"]`)
          .forEach(el => {
            el.style.width = value + 'px'
          })
        $resizer.css({right: 0})
      } else {
        $parent.css({height: value + 'px', bottom: 0})
        $resizer.css({bottom: 0})
      }
      resolve({
        value,
        id: elType === 'col' ? $parent.data.col : null,
      })
      $resizer.removeClass('resizer-selected')
    }
  })
}