import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        usernameLogin: (username, password) => {
            return dispatch(userActions.usernameLogin(username, password))
        },
        facebookLogin: () => {
            return dispatch(userActions.facebookLogin());
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);