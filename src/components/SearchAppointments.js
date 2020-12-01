/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export class SearchAppointments extends Component {
  render() {
    return (
      <div className="search-appointments row justify-content-center my-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              id="SearchApts"
              placeholder="Search"
              type="text"
              className="form-control"
              aria-label="Search Appointments"
              onChange={e => this.props.searchApts(e.target.value)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret"></span>
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <a
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'petName' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('petName', this.props.orderDir)
                  }
                  href="#"
                >
                  Pet Name
                </a>
                <a
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'aptDate' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('aptDate', this.props.orderDir)
                  }
                  href="#"
                >
                  Date
                </a>
                <a
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'ownerName' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('ownerName', this.props.orderDir)
                  }
                  href="#"
                >
                  Owner
                </a>
                <div role="separator" className="dropdown-divider"></div>
                <a
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderDir === 'asc' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder(this.props.orderBy, 'asc')
                  }
                  href="#"
                >
                  Asc
                </a>
                <a
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderDir === 'desc' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder(this.props.orderBy, 'desc')
                  }
                  href="#"
                >
                  Desc
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAppointments;
