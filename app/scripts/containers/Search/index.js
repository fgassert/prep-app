import { connect } from 'react-redux';
import SearchDetail from '../../components/Search/SearchDetail';

import { getSearchResults } from '../../actions/search'


const mapStateToProps = (state, { params, route }) => ({
  currentPage: route.path
});

const mapDispatchToProps = (dispatch) => ({
  getSearchResults: (slug) => dispatch(getSearchResults(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchDetail);
