var React = require('react');

import CountStore from '../../stores/CountStore'
import CountActions from '../../actions/CountActions'

import AltContainer from 'alt/AltContainer';
var Button = require('react-bootstrap').Button;


/*
 var ReactStateMagicMixin = require('alt/mixins/ReactStateMagicMixin');
 var Dashboard = React.createClass({
   mixins: [ReactStateMagicMixin],
   statics: {
   registerStore: CountStore
   },

   render: function() { 
   return (
   <Counter CountActions={CountActions}
   total={this.state.total}
   counts={this.state.counts}
   step={this.state.step}
   histsize={this.state.histsize}
   type={this.state.type}/>
   );
   }
   }); 
*/
 var Dashboard = React.createClass({

   render: function() { 
   return (
   <div>
   <AltContainer store={CountStore} actions={{CountActions: CountActions}}>
   <Counter  />
   </AltContainer>
   </div> );
   }
   }); 

var Counter = React.createClass({
  getInitialState() {
    return {
      times: 0,
        counts: []
    };
  },
  handleAlertShow() {
      console.log("Button pushed");
      alert("Button pushed");
  },


    render: function(){
        var dname = this.props.type
        this.props.counts = this.state.counts
            //this.props.counts = [{"data":{"value":1,"date":1438819136856},"state":{"deleted":false,"pending":false,"committed":false}}]
        console.log(`Props in Counter is ${JSON.stringify(this.props)}`)
        if (this.state.times < 3 ) {
            this.state.counts.push({"data":{"value":1,"date":1438819136856},"state":{"deleted":false,"pending":false,"committed":false}});
        }
        this.state.times += 1


        return     <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-push-4">
                    <h3 className="hidden-xs" >Test </h3>
                    <div className="fill full-height">
                        <Main ></Main>
                    </div>
                </div>  {/*-- col --*/}

                <div className="col-md-4 col-md-pull-4">
                    <h3>Buttons</h3>
<div>
        {this.props.counts.map(function(count, index) {
            return <Button key={index} bsStyle='warning' bsSize='xsmall' className='delbtn' onClick={this.handleAlertShow}>Click me</Button>;}.bind(this))}
        </div>
                </div> {/*<!-- col -->*/}


            </div> {/*<!-- row -->*/}
        </div>


  }
});

var Main = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        CountActions.addIncrement();
    },

    render: function() {
        
        return (
            <div>           
                <div className="h3 count-btn" onClick={ this.handleSubmit }
                     onTouchEnd={ this.handleSubmit }>
                    Make a new button
                </div>
            </div>
        );
    }
});

module.exports = Dashboard;
