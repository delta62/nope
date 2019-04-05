const CANNED_RESPONSE = 'lol wut'

function listener(details: { requestId: any }) {
  let filter: any = browser.webRequest.filterResponseData(details.requestId)
  let encoder = new TextEncoder()

  filter.ondata = () => {
    filter.write(encoder.encode(CANNED_RESPONSE))
    filter.disconnect()
  }

  return { }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: [ '<all_urls>' ], types: [ 'main_frame' ] },
  [ 'blocking' ]
)

browser.runtime.onMessage.addListener((req, sender, sendResponse) => {
  console.log('got message', req)
})
