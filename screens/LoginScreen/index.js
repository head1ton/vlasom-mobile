import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as usreActions } from '../../redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        usernameLogin: (username, password) => {
            dispatch(usreActions.usernameLogin(username, password))
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);