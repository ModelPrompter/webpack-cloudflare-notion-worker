// @see https://github.com/stephenou/fruitionsite/issues/86#issuecomment-978895258
function removeLinkPopup () {
  document.querySelectorAll('.notion-collection-item, .notion-collection-item a').forEach($item => {
    $item.addEventListener('click', (e) => { e.stopPropagation(); })
  })
}