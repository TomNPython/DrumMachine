var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var DrumMachine = function (_React$Component) {_inherits(DrumMachine, _React$Component);
  function DrumMachine(props) {_classCallCheck(this, DrumMachine);var _this = _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this,
    props));_this.







    handleDisplay = function (displaytext) {
      _this.setState({ display: displaytext });
    };_this.state = { drums: drumSounds, display: 'Display' };return _this;} // show name of drumsound in textbox
  _createClass(DrumMachine, [{ key: 'render', value: function render()
    {var _this2 = this;
      return (
        React.createElement('div', { id: 'drum-machine' },
          React.createElement('div', { id: 'display' },
            React.createElement('h1', null, 'Machine of Drums'),
            React.createElement('div', { className: 'drum-button-container' }, drumSounds.map(function (sound) {return (
                  React.createElement(DrumPad, {
                    name: sound.name,
                    id: sound.key,
                    letter: sound.letter,
                    src: sound.src,
                    handleDisplay: _this2.handleDisplay }));})),


            React.createElement('div', { className: 'rightSide' },
              React.createElement('div', { className: 'powerButton' }, 'Power'),

              React.createElement('div', { className: 'display' },
                this.state.display)))));




    } }]);return DrumMachine;}(React.Component);var




DrumPad = function (_React$Component2) {_inherits(DrumPad, _React$Component2);function DrumPad() {var _ref;var _temp, _this3, _ret;_classCallCheck(this, DrumPad);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref = DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call.apply(_ref, [this].concat(args))), _this3), _this3.










    handleClick = function () {
      _this3.audio.play();
      _this3.audio.currentTime = 0;
      _this3.props.handleDisplay(_this3.props.name);
    }, _this3.


    handleKeyPress = function (e) {
      if (e.keyCode == _this3.props.id.charCodeAt()) {
        _this3.handleClick();
      }
    }, _temp), _possibleConstructorReturn(_this3, _ret);}_createClass(DrumPad, [{ key: 'componentWillMount', value: function componentWillMount() {document.addEventListener('keydown', this.handleKeyPress);} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {document.removeEventListener('keydown', this.handleKeyPress);} //allow for clicks to play sound 
    //allow for keypresses to play sound
  }, { key: 'render', value: function render() {var _this4 = this;
      return React.createElement('div', { className: 'drumButton', onClick: this.handleClick },
        React.createElement('h1', null, this.props.letter),
        React.createElement('audio', { id: this.props.name, src: this.props.src, ref: function ref(_ref2) {return _this4.audio = _ref2;} }));

    } }]);return DrumPad;}(React.Component);

// array of objects representing drumpads
var drumSounds = [{ name: 'Heater-1',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  key: 'Q',
  letter: 'Q' },
{ name: 'Heater-2',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  key: 'W',
  letter: 'W' },
{ name: 'Heater-3',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  key: 'E',
  letter: 'E' },
{ name: 'Heater-4_1',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  key: 'A',
  letter: 'A' },
{ name: 'Heater-6',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  key: 'S',
  letter: 'S' },
{ name: 'Dsc-Oh',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  key: 'D',
  letter: 'D' },
{ name: 'Kick-n-Hat',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  key: 'Z',
  letter: 'Z' },
{ name: 'RP4-Kick',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  key: 'X',
  letter: 'X' },
{ name: 'Cev-H2',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  key: 'C',
  letter: 'C' }];


ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById('app'));



// make an array of 9 drum objects - done
// make each one appear in the display as a button - done
// next to the buttons have a display - done
// on click of drum object button (or press of button), hear sound and display name in display view - done

// power button controls whether buttons produce sound on click or not - todo
