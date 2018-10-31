import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from '../../redux/modules/photos';

const mapDispatchToProps = (dispatch, ownProps) => {
    const { navigation : { state : { params : { categoryName } } } } = ownProps;
    console.log(categoryName)
    return {
        getCategoryImage: () => {
            return dispatch(photoActions.getCategoryImage(categoryName))
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);