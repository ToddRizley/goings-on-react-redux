import React, { Component } from 'react'
import { connect } from 'react-redux'


const DiningOptions = class extends Component {



  render(){
        return (
          <div>
                <h1>Hello World!</h1>
          </div>

        );
      }
    }
const DiningOptionsContainer = connect(mapStateToProps, null)(DiningOptions)

  function mapStateToProps(state) {
    return {concertList: state.concertList}
  }

export default DiningOptionsContainer;
