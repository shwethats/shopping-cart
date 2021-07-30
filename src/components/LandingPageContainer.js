import { connect } from 'react-redux';
import LandingPage from './LandingPage';

const mapStateToProps = state => {
  return state.auth;
};

export default connect(
  mapStateToProps
)(LandingPage);
