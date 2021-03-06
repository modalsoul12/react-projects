var React = require('react');
var Prompt = require('../components/Prompt')

var PromptContainer = React.createClass({
  render: function(){
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
      return {
        username: ''
      }
    },
    handleUpdateUser: function (e) {
      this.setState({
        username: e.target.value
      })
    },
    handleSubmitUser: function(e) {
      e.preventDefault();
      var username = this.state.username;
      this.setState({
        username: ''
      });

      if(this.props.routeParams.playerOne) {
        //go to /battle
        //console.log(this.context);
        this.context.router.push({
          pathname: '/battle',
          query: {
            playerOne: this.props.routeParams.playerOne,
            playerTwo: this.state.username
          }
        })
      }
      else {
        //go to /playerTwo
        //console.log(this.context);
        this.context.router.push('/playerTwo/' + this.state.username)
      }
    },
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.props.state.username} />
    )
  }
});

module.exports = PromptContainer;
