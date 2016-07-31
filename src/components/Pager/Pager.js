import React from 'react';

export default class Pager extends React.Component {
  static propTypes = {
    handlePageChange: React.PropTypes.func,
  }

  static defaultProps = {
    handlePageChange: () => {},
  }

  constructor(props) {
    super(props);
    this.handlePageChange = this.props.handlePageChange;
  }
  render() {
    return (
      <ul>
        {[1, 2, 3, 4, 5].map((i) => <li key={i} onClick={this.handlePageChange}>{i}</li>)}
      </ul>
    );
  }
}
