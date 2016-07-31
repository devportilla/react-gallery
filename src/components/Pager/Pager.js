import React from 'react';

export default class Pager extends React.Component {
  static propTypes = {
    handlePageChange: React.PropTypes.func,
    maxPages: React.PropTypes.number,
    currentPage: React.PropTypes.number,
  }

  static defaultProps = {
    handlePageChange: () => {},
    maxPages: 100,
    currentPage: 1,
  }

  createPagination = () => {
    const cp = this.props.currentPage;
    let pagesToShow = [];
    if (cp < 3) {
      pagesToShow = [1, 2, 3, 4, 5];
    } else {
      pagesToShow = [cp - 2, cp - 1, cp, cp + 1, cp + 2];
    }
    return pagesToShow;
  }

  render() {
    return (
      <ul>
        <li key="first" onClick={() => this.props.handlePageChange(1)}>
          {'<<'}
        </li>
        <li key="prev" onClick={() => this.props.handlePageChange(this.props.currentPage - 1)}>
          {'<'}
        </li>
        {this.createPagination().map(
          (i) => <li key={i} onClick={() => this.props.handlePageChange(i)}>{i}</li>
        )}
        <li key="next" onClick={() => this.props.handlePageChange(this.props.currentPage + 1)}>
          {'>'}
        </li>
        <li key="last" onClick={() => this.props.handlePageChange(this.props.maxPages)}>
          {'>>'}
        </li>
      </ul>
    );
  }
}
