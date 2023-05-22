import {$} from '@core/Dom'

export function resizeHandler($root, event) {
  return new Promise(resolve => {
    const $resizer = $(event.target)
    $resizer.addClass('resizer-selected')
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    const type = $resizer.data.resize
    let delta = 0
    let value = 0

    document.onmousemove = e => {
      if (type === 'col') {
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

      if (type === 'col') {
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
        type,
        id: $parent.data[type],
      })
      $resizer.removeClass('resizer-selected')
    }
  })
}