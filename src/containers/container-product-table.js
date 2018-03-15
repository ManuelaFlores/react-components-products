import { connect } from 'react-redux';
import ProductTable from './../components/product-table';

const Main= connect(
  function mapStateToProps(state) {
    const {
      filteredProducts
    } = state.AppReducer;
    return {
      products: filteredProducts
    };
  }
)(ProductTable);

export default Main;