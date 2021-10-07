import React from 'react'
import DataTable from 'react-data-table-component'

function Table({columns, data}) {
    const customStyles = {
        rows: {
            style: {
                minHeight: '30px', // override the row height
            },
            highlightOnHoverStyle: {
                backgroundColor: 'rgb(230, 244, 244)',
                borderBottomColor: '#FFFFFF',
                outline: '1px solid #FFFFFF',
            },
            onclick: ()=>{
                alert(`${data.id}`)
            },
        },
        headCells: {
            style: {
                paddingLeft: '0px', // override the cell padding for head cells
                paddingRight: '0px',
            },
        },
        cells: {
            style: {
                paddingLeft: '5px', // override the cell padding for data cells
                paddingRight: '5px',
            },
        },
        pagination: {
            style: {
                border: 'none',
            },
        },
    };

    const paginationComponentOptions = {
        rowsPerPageText: 'Rows',
        rangeSeparatorText: 'of',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Orders',
    };

    return (
        <div className="table-container">
            <DataTable
                title="Order List"
                columns={columns}
                data={data}
                customStyles={customStyles}
                selectableRows
                highlightOnHover
		        pointerOnHover
                pagination
                paginationComponentOptions={paginationComponentOptions}
                expandableRows
            />
        </div>
    )
}

export default Table
