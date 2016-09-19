import React, { Component } from 'react'
// import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import fetchConcerts from '../actions/fetchConcerts.js'
import { bindActionCreators } from 'redux'
import '../routes.js'


class ListContainer extends Component {

  handleFormSubmit(formProps){
    event.preventDefault()
    debugger
    this.props.fetchConcerts(formProps)

  }


  render(){
    const { handleSubmit, fields: { userCity, userDate }} = this.props;


        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
                <label>City</label>
                <input className="form-input" {...userCity} />
                <label>Date</label>
                <input className="form-input" {...userDate} />
              <button action="submit" className="btn btn-primary">Sign in!</button>
            </form>
        );
      }
    }

  function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchConcerts: fetchConcerts}, dispatch)
}


export default reduxForm({
      form: 'search',
      fields: ['userCity', 'userDate']
    }, null, mapDispatchToProps)(ListContainer);
