import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from '../../redux/modules/photos';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapStateToProps = (state, ownProps) => {
    const { photos : { feed } } = state;
    return {
        feed
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getFeed: () => {
            dispatch(photoActions.getFeed())
        },
        initApp: () => {
            dispatch(photoActions.getFeed());
            dispatch(photoActions.getSearch());
            dispatch(photoActions.getInterestList());
            dispatch(photoActions.getCategory());
            dispatch(userActions.getNotifications());
            dispatch(userActions.getMyProfile());
        },
        getFeedMore: (page) => {
            return dispatch(photoActions.getFeedMore(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);