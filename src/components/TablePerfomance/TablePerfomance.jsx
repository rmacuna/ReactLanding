import React, { Component } from 'react';
import styled from 'styled-components';



const Table = styled.table`
    border: 1px solid #818181;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    td, th {
        border: 1px solid #000000;
        padding: 10px 10px;
    }
    tbody{
        td{
            font-size: 15px;
            cursor: pointer;
        }
    }
    thead {
        background: #FFFFFF;
        th {
            font-size: 15px;
            font-weight: bold;
            color: #000000;
            text-align: center;
        }
    }

    td.cell-active{
        background: #41A436; 
    }
`;


class TablePerfomance extends Component {

    constructor(props) {
        super(props);
    }

 


    paintCell = (event) => {
        event.target.classList.add('cell-active');
    }
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        {this.props.tableData.map((title, i) =>
                            <th key={i}>{title}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {this.props.tableData.map((ind, i) =>
                        <tr key={i}>{
                            this.props.tableData.map((col,j) => <td  key={j} onClick={(e) => this.paintCell(e)} >{col}</td>)
                        }</tr>)}
                </tbody>
            </Table>
        );
    }
}

export default TablePerfomance;