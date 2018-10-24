import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from '../../redux/modules/photos';

const mapDispatchToProps = (dispatch, ownProps) => {
    const { navigation : { state : { params : { photoId } } } } = ownProps;
    return {
        getPhotoDetail: () => {
            return dispatch(photoActions.getPhotoDetail(photoId));
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);