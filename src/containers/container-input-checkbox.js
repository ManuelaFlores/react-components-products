import { connect } from "react-redux";

import SearchBar from "./../components/search-bar";
import { filterTextChanged, inStockOnlyChanged } from "../actions";

const SearchBarWithRedux = connect(
  function mapStateToProps(state) {

    const { filterText, inStockOnly } = state.AppReducer;

    return {
      filterText,
      inStockOnly
    };
  },

  function mapDispatchToProps(dispatch) {
    return {
      setFilterText(newFilterText) {
        dispatch(filterTextChanged(newFilterText));
      },
      setInStockOnly(newValue) {
        dispatch(inStockOnlyChanged(newValue));
      }
    };
  }
)(SearchBar);

export default SearchBarWithRedux;