import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    //CODE GOES HERE
    super();
    this.state ={
      term: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    //CODE GOES HERE
  }

  onInputChange(event) {
    //CODE GOES HERE
    event.preventDefault();
    this.setState({
      term: event.target.value
    });
    //CODE GOES HERE
  }

  onFormSubmit(event) {
    //CODE GOES HERE
    event.preventDefault();
    //dispatch action with new weather
    this.props.fetchWeather(this.state.term);
    this.setState({
        term: ""
    });
    //CODE GOES HERE
  }

  render() {
    return (
      <form className='input-group' onSubmit={this.onFormSubmit}>
        <input
          placeholder='get a five day forcast in your face city!'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-button'>
          <button type='submit' className='btn btn-secondary'>
            Submit
          </button>
        </span>
      </form>
    );
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchWeather
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

//CODE GOES HERE

//CODE GOES HERE


//CODE GOES HERE

//CODE GOES HERE
