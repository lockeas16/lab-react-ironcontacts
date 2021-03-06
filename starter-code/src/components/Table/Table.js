import React from "react";

const Table = ({ children }) => (
  <table className="uk-table uk-table-divider uk-table-hover uk-table-striped">
    <thead>
      <tr>
        <th className="uk-width-small"><span className="uk-text-bold uk-text-lead">Picture</span></th>
        <th className="uk-width-small"><span className="uk-text-bold uk-text-lead">Name</span></th>
        <th className="uk-width-small"><span className="uk-text-bold uk-text-lead">Popularity</span></th>
        <th className="uk-width-small"><span className="uk-text-bold uk-text-lead">Action</span></th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

export default Table;
