import { h } from 'preact'
import { connect } from 'preact-redux'

import Override from './override'

const mapStateToProps = (state: any) => ({
  overrides: [ 1, 2, 3 ]
})

const App = ({ overrides }: any) => {
  let children = overrides.map((o: any) => {
    return <Override />
  })

  return <div>{children}</div>
}

export default connect(mapStateToProps)(App)
