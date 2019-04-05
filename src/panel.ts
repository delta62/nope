(function() {
  document.getElementById('match')!.addEventListener('keyup', interceptPage)
  document.getElementById('replacement')!.addEventListener('keyup', interceptPage)
})()

function interceptPage() {
  let pattern = (document.getElementById('match') as HTMLInputElement).value
  let replacement = (document.getElementById('replacement') as HTMLInputElement).value
  browser.runtime.sendMessage({ pattern, replacement })
}
