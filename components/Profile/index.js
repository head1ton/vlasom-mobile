import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
    const { profile : { id } } = ownProps;

    return {
        logout: () => {
            dispatch(userActions.logout())
        },
        followUser: () => {
            return dispatch(userActions.followUser(id));
        },
        unfollowUser: () => {
            return dispatch(userActions.unfollowUser(id));
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);