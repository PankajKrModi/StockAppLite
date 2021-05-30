import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const RecentTx = () => {
    const rowData = [
        {'invoice id': "Toyota", date: "Celica", Description: "35000",Status: "Completed",Descriptions:"" },
        {'invoice id': "Ford", date: "Mondeo", Description: 32000},
        {'invoice id': "Porsche", date: "Boxter", Description: 72000}
    ];
 
    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 1000}}>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="invoice id"></AgGridColumn>
                <AgGridColumn field="date"></AgGridColumn>
                <AgGridColumn field="Description"></AgGridColumn>
                <AgGridColumn field="Status"></AgGridColumn>
                <AgGridColumn field="Descriptions"></AgGridColumn>
            </AgGridReact>
        </div>
    );
 };

 export default RecentTx;