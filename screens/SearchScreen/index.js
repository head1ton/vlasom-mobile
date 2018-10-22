import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from '../../redux/modules/photos';

const mapStateToProps = (state, ownProps) => {
    const { photos : { search } } = state;
    return {
        search
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getEmptyFeed: () => {
            dispatch(photoActions.getSearch())
        },
        searchTag: (tag) => {
            dispatch(photoActions.searchByTag(tag))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);