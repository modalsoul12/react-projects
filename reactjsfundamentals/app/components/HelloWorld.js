var React = require('react')
var ReactDOM = require('react-dom')
var HelloWorld = React.createclass({
  render: function(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
});

ReactDOM.render(<HelloWorld />, document.getElementByID('app'));