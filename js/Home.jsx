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
        {this.props.test_message}
      </div>
    )
  }
})

module.exports = connector(Home)
