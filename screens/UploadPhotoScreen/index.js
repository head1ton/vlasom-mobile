import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from '../../redux/modules/photos';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        allCategoryName: () => {
            return dispatch(photoActions.allCategoryName());
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);