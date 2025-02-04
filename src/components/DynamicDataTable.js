import React from "react";
import { Input } from "reactstrap";
import DataTable from "react-data-table-component";

const DynamicDataTable = ({ columns, data }) => {
  return (
    <>
      <DataTable
        responsive
        pagination
        highlightOnHover
        selectableRows
        selectableRowsHighlight
        columns={columns}
        data={data}
        striped
      ></DataTable>
    </>
  );
};

export default DynamicDataTable;
