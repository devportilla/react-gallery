import React from 'react';
import './Pager.scss';

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
        <li
          className="pager__page"
          key="first"
          onClick={() => this.props.handlePageChange(1)}
        >
          {'<<'}
        </li>
        <li
          className="pager__page"
          key="prev"
          onClick={() => this.props.handlePageChange(this.props.currentPage - 1)}
        >
          {'<'}
        </li>
        {this.createPagination().map(
          (i) =>
            <li
              className={`pager__page ${this.props.currentPage === i ? 'pager__page--current' : ''}`}
              key={i} onClick={() => this.props.handlePageChange(i)}
            >
              {i}
            </li>
        )}
        <li
          className="pager__page"
          key="next"
          onClick={() => this.props.handlePageChange(this.props.currentPage + 1)}
        >
          {'>'}
        </li>
        <li
          className="pager__page"
          key="last"
          onClick={() => this.props.handlePageChange(this.props.maxPages)}
        >
          {'>>'}
        </li>
      </ul>
    );
  }
}
