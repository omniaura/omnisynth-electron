import { connect } from 'react-redux';
import PatchEditPage from '../components/PatchEditPage';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PatchEditPage);
