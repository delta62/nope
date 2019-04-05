type ListenerFunction = (details: { requestId: any }) => object

function listenerFactory(replacement: string): ListenerFunction {
  return function listener(details: { requestId: any }) {
    let filter: any = browser.webRequest.filterResponseData(details.requestId)
    let encoder = new TextEncoder()
    let hasRun = false

    filter.ondata = () => {
      if (!hasRun) {
        filter.write(encoder.encode(replacement))
        hasRun = true
      }
    }

    filter.onstop = () => {
      filter.disconnect()
    }

    return { }
  }
}

let listener: ListenerFunction

browser.runtime.onMessage.addListener((req, sender, sendResponse) => {
  console.log('message received', req)
  if (listener) {
    browser.webRequest.onBeforeRequest.removeListener(listener)
  }

  listener = listenerFactory(req.replacement)

  if (!req.pattern) {
    return
  }

  console.log(`add intercept for ${req.pattern} -> ${req.replacement}`)
  browser.webRequest.onBeforeRequest.addListener(
    listener,
    { urls: [ req.pattern ], types: [ 'main_frame' ] },
    [ 'blocking' ]
  )
})
