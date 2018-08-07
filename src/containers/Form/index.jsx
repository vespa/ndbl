import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { test } from './redux';
/* eslint-disable */

// const Form = ({ props }) => {
//   console.log(props);
//   return (
//     <div>
//       oi
//     </div>);
// };

// const mapStateToProps = (state) => {
//   return {
//     test: state.form.test,
//   };
// };

// Form.propTypes = {
//   props: PropTypes.shape({}).isRequired,
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: url => dispatch(test(url)),
//   };
// };

// class Form extends React.Component {
//   constructor(args) {
//     super(args);
//     console.log(args);
//   }
//   render() {
//     return (<div> {this.props.test.toString()} </div>)
//   }
// }

const Form = (test) => {
  console.log(test);
  return (
    <div>
      oi
    </div>);
};


// Form.propTypes = {
//   props: PropTypes.shape({}).isRequired,
// };


const mapStateToProps = (state) => {
  return {
    test: state.form.test,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: url => dispatch(test(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
