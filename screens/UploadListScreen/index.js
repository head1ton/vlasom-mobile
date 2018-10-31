import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapStateToProps = (state, ownProps) => {
    const { user : { loginUser } } = state;
    return {
        loginUser
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getMyProfile: () => {
            dispatch(userActions.getMyProfile())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);