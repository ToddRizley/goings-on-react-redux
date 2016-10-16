import React, { Component } from 'react'
import { Link } from 'react-router'
import updateSelectedBar from '../actions/updateSelectedBar.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const BarOption= class extends Component {

handleClick() {
    event.preventDefault()
    var selectedbar = this.props.barData
    this.props.updateSelectedBar(selectedbar)
  }

  getMiles(i) {
   return i*0.000621371192;
  }

  render(){
        return (
          <div><button className="button" onClick={this.handleClick.bind(this)}><Link to={"/evening_results"}>Select</Link></button>
          <strong><a href={this.props.barData.url} target="_blank">{ this.props.barData.name }</a></strong> |
            { " " + this.props.barData.location.address[0] } |
                { " " + this.props.barData.location.neighborhoods[0] } |
                { " " + this.props.barData.categories[0][0] } |
                { " " + this.getMiles(this.props.barData.distance).toString().match(/.*\..{0,2}|.*/)[0] }
               {" "} miles from venue</div>

        );
      }
    }

const BarOptionRow = connect(null, mapDispatchToProps)(BarOption)

  function mapDispatchToProps(dispatch) {
    return  bindActionCreators({updateSelectedBar}, dispatch)
  }
export default BarOptionRow;
