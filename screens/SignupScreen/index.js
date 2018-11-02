import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createAccount: (username, password, email, nickname) => {
            return dispatch(userActions.createAccount(username, password, email, nickname));
        },
        doCheckEmail: (email) => {
            return dispatch(userActions.doCheckEmail(email));
        },
        doCheckUsername: (username) => {
            return dispatch(userActions.doCheckUsername(username));
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);