import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Form = ({ test }) => {
  return (
    <div>
      {test.toString()}
    </div>);
};

Form.propTypes = {
  test: PropTypes.bool.isRequired,
};

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
