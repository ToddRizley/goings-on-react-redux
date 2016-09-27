import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fetchConcerts from '../actions/fetchConcerts.js'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'

const Form = class extends Component {
  state = {
    open: false,
  };
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  handleFormSubmit(event){
    event.preventDefault()
    var city = document.getElementById("city").value
    var date = document.getElementById("date").value

    if (this.invalidDate(date)) {
      this.handleOpen()
    } else {
    this.props.fetchConcerts(city, date)
    }
  }

  invalidDate(date){
    var today = new Date();
    var dateEdit = new Date(date)
    console.log(dateEdit <= today)
    if (dateEdit <= today ){
      return true
    } else {
      return false
    }
  }

  render(){
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

        return (
        <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        > Invalid entry
        </Dialog>
        <Paper zDepth={2}>
          <center>
            <form onSubmit={this.handleFormSubmit.bind(this)}>
                <Divider />
                <TextField
                    errorText="This field is required"
                    floatingLabelText="Enter Your City"
                    id="city"
                    />
                <Divider />
                <DatePicker id="date" errorText="This field is required" hintText="Choose a Date" container="inline" mode="landscape" />
                <Divider />
                <RaisedButton label="Submit" type="submit" fullWidth={true} />

            </form>
          </center>
           </Paper>
        </div>
        );
      }
    }
const SearchForm = connect(null, mapDispatchToProps)(Form)

    function mapDispatchToProps(dispatch) {
      return  bindActionCreators({fetchConcerts}, dispatch)
    }
export default SearchForm;
