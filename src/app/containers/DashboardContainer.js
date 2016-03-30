import { push } from 'react-router-redux'
import { connect } from 'react-redux'

import { LOCAL_STORAGE_TOKEN_KEY } from '../config.js'
import { resetToken } from '../actions/token.js'
import Dashboard from '../components/Dashboard.jsx'


function mapStateToProps(state, ownProps) {
  return {
    token: state.token.value
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    logout: () => {
      dispatch(resetToken())
      localStorage[LOCAL_STORAGE_TOKEN_KEY] = JSON.stringify(null)
      dispatch(push({ pathname: '/login' }))
    }
  }
}

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default DashboardContainer