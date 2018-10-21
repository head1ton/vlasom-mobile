import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from '../../redux/modules/photos';

const mapDispatchToProps = (dispatch, ownProps) => {
    const { id, is_liked, is_interested_image } = ownProps;
    return {
        dispatchLike: () => {
            if(is_liked){
                return dispatch(photoActions.unlikePhoto(id))
            }
            else{
                return dispatch(photoActions.likePhoto(id))
            }
        } ,
        dispatchInterest: () => {
            if(is_interested_image){
                return dispatch(photoActions.uninterestPhoto(id))
            }
            else{
                return dispatch(photoActions.interestPhoto(id))
            }
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);