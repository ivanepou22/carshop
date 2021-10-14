import MaterialTable from 'material-table';
import React from 'react'
import { useHistory } from "react-router-dom";



function Table({ columns, data }) {

    const history = useHistory();
    function productIDHandle(id) {
        history.push(`/order/${id}`)
    }

    return (
        <div className="table-container">
            <MaterialTable
                title="Order List"
                data={data}
                columns={columns}
                onRowClick={(event, selectedRow) =>
                    productIDHandle(selectedRow.id)
                }
                options={{
                    filtering: false,
                    exportButton: true,
                    searchAutoFocus: true,
                    pageSizeOptions: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                }
                }
            />
        </div>
    )
}

export default Table
