const React = require('react')
const { connector } = require('./Store')
const { object, arrayOf, func } = React.PropTypes

const Home = React.createClass({
  propTypes: {
    questions: arrayOf(object),
    setQuizQuestions: func,
    removeQuizQuestions: func
  },
  selectVolume (event) {
    if (event.target.checked) {
      this.props.setQuizQuestions(event.target.value)
    } else {
      this.props.removeQuizQuestions(event.target.value)
    }
  },
  render () {
    return (
      <div className='home-container'>
        <div className='home-info'>
          <h1 className='title'>TACP Quiz</h1>
          <label><input type='checkbox' value='1' onChange={this.selectVolume} />Volume 1</label>
          <label><input type='checkbox' value='2' onChange={this.selectVolume} />Volume 2</label>
          <label><input type='checkbox' value='3' onChange={this.selectVolume} />Volume 3</label>
          <button>Start Quiz</button>
        </div>
      </div>
    )
  }
})

module.exports = connector(Home)
