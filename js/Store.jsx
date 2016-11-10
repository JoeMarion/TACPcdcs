const redux = require('redux')
const reactRedux = require('react-redux')
const { questions } = require('../public/data')

const SET_QUIZ_QUESTIONS = 'setQuizQuestions'
// const REMOVE_QUIZ_QUESTIONS = 'removeQuizQuestions'
const initialState = {
  questions,
  quiz: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUIZ_QUESTIONS:
      return reduceAddQuestions(state, action)
    // case REMOVE_QUIZ_QUESTIONS:
    //   return reduceRemoveQuestions(state, action)
    default:
      return state
  }
}

const reduceAddQuestions = (state, action) => {
  const newState = {}
  const volQuestions = state.questions.reduce((init, val) => {
    let question = []
    if (val.volume === action.value) {
      question = init.concat(val)
      return question
    } else { return init }
  }, [])
  Object.assign(newState, state, {quiz: state.quiz.concat(volQuestions)})
  return newState
}

const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    quiz: state.quiz
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setQuizQuestions: (volume) => {
      dispatch({type: SET_QUIZ_QUESTIONS, value: volume})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
