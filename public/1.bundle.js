webpackJsonp([1],{

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var _require = __webpack_require__(225),
	    connector = _require.connector;

	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    string = _React$PropTypes.string,
	    arrayOf = _React$PropTypes.arrayOf;


	var Home = React.createClass({
	  displayName: 'Home',

	  propTypes: {
	    route: object,
	    test_message: string,
	    questions: arrayOf(object)
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'home-info' },
	      this.props.test_message
	    );
	  }
	});

	module.exports = connector(Home);

/***/ }

});