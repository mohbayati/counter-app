import React from "react";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class TableHeader extends React.Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    return this.props.onSort(sortColumn);
  };
  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc")
      return <FontAwesomeIcon icon={faSortDown} />;
    return <FontAwesomeIcon icon={faSortUp} />;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((c) => (
            <th
              key={c.path || c.key}
              onClick={() => this.raiseSort(c.path)}
              scope="col"
              style={{ cursor: "pointer" }}
            >
              {c.lable} {this.renderSortIcon(c)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
