import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from '../../redux/modules/photos';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCategoryImage: () => {
            return dispatch(photoActions.getCategoryImage('커플사진'))
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);