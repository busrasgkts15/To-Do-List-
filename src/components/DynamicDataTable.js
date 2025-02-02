import React from "react";
import { Input} from "reactstrap";
import DataTable from "react-data-table-component";

const DynamicDataTable = ({ columns, data }) => {
  return (
    <>
      <DataTable
        pagination
        highlightOnHover
        selectableRows
        selectableRowsHighlight
        columns={columns}
        data={data}
        striped
        fixedHeaderScrollHeight="300px"
      ></DataTable>
    </>
  );
};

export default DynamicDataTable;
