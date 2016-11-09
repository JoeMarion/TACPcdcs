const React = require('react')
const { connector } = require('./Store')
const { object, string, arrayOf } = React.PropTypes

const Home = React.createClass({
  propTypes: {
    route: object,
    test_message: string,
    questions: arrayOf(object)
  },
  render () {
    return (
      <div className='home-info'>
        <label><input type='checkbox' value='Volume 1' />Volume 1</label>
        <label><input type='checkbox' value='Volume 2' />Volume 2</label>
        <label><input type='checkbox' value='Volume 3' />Volume 3</label>
      </div>
    )
  }
})

module.exports = connector(Home)
