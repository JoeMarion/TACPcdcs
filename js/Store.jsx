const redux = require('redux')
const reactRedux = require('react-redux')
const { questions } = require('../public/data')

const initialState = {
  test_message: 'test',
  questions
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    test_message: state.test_message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
