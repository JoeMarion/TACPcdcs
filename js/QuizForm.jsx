const React = require('react')

const QuizForm = React.createClass({
  render () {
    return (
      <div>
        <label><input type='checkbox' value='Volume 1'/>Volume 1</label>
        <label><input type='checkbox' value='Volume 2'/>Volume 2</label>
        <label><input type='checkbox' value='Volume 3'/>Volume 3</label>
      </div>
    )
  }
})

module.exports = QuizForm
