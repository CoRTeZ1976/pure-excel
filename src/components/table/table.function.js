export function shouldResize(event) {
  return event.target.dataset.resize && event.buttons === 1
}