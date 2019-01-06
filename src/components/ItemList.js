import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchDefaults } from '../actions/defaultAction';

class ItemList extends Component {
    componentWillMount() {
        this.props.LoadDefaultValues();
    }

  render() {
      const items = this.props.defaultValues.map(item => (
          <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
          </div>
      ));
    return (
      <div>
        {items}
      </div>
    )
  }
}

const mapStateToProps = () => state => ({
    defaultValues: state.defaultReducer.defaultValues
});

const mapDispatchToProps = (dispatch) => {
    return {
        LoadDefaultValues: () => dispatch(fetchDefaults())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

