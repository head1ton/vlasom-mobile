import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from '../../redux/modules/photos';

const mapDispatchToProps = (dispatch, ownProps) => {
    const { navigation : { state : { params : { photoId } } } } = ownProps;
    return {
        getPhotoComments: () => {
            return dispatch(photoActions.getPhotoComments(photoId));
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);