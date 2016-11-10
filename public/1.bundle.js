webpackJsonp([1],{

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var _require = __webpack_require__(238),
	    connector = _require.connector;

	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    arrayOf = _React$PropTypes.arrayOf,
	    func = _React$PropTypes.func;


	var Home = React.createClass({
	  displayName: 'Home',

	  propTypes: {
	    questions: arrayOf(object),
	    setQuizQuestions: func,
	    removeQuizQuestions: func
	  },
	  selectVolume: function selectVolume(event) {
	    if (event.target.checked) {
	      this.props.setQuizQuestions(event.target.value);
	    } else {
	      this.props.removeQuizQuestions(event.target.value);
	    }
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'home-container' },
	      React.createElement(
	        'div',
	        { className: 'home-info' },
	        React.createElement(
	          'h1',
	          { className: 'title' },
	          'TACP Quiz'
	        ),
	        React.createElement(
	          'label',
	          null,
	          React.createElement('input', { type: 'checkbox', value: '1', onChange: this.selectVolume }),
	          'Volume 1'
	        ),
	        React.createElement(
	          'label',
	          null,
	          React.createElement('input', { type: 'checkbox', value: '2', onChange: this.selectVolume }),
	          'Volume 2'
	        ),
	        React.createElement(
	          'label',
	          null,
	          React.createElement('input', { type: 'checkbox', value: '3', onChange: this.selectVolume }),
	          'Volume 3'
	        ),
	        React.createElement(
	          'button',
	          null,
	          'Start Quiz'
	        )
	      )
	    );
	  }
	});

	module.exports = connector(Home);

/***/ }

});