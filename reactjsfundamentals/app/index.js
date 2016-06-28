var React = require('react');
var ReactDOM = require('react-dom');

var userData = {
  name: 'Victor Pham',
  username: 'modalsoul12',
  image: 'https://avatars3.githubusercontent.com/u/7333693?v=3&amp;s=460'
}

var ProfilePic = React.createClass({
  render: function(){
    return (
      <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    )
  }
});

var ProfileLink = React.createClass({
  render: function(){
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function(){
    return (
      <div>
          {this.props.name}
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function(){
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />        
      </div>
    )
  }
}); 

ReactDOM.render(<Avatar user={userData}/>, document.getElementById('app'));
