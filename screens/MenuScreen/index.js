import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapStateToProps = (state, props) => {
    const { photos : { categoryName }, user : { loginUser : { nickname } } } = state;
    return {
        categoryName,
        nickname
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: () => {
            dispatch(userActions.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);