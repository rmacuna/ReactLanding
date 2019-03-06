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
        background: #41DD39; 
        /* animation: move 0.3s linear  */
    }

    @keyframes move {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;


class TablePerfomance extends Component {


    render() {

        // const Rows = () => {
        //     this.props.rows.forEach((element, index) => {
        //         return (
        //             <tr key={index}>{
        //                 this.props.rows.forEach((elem, index) => {
        //                     return (<td key={index}>{elem}</td>)
        //                 })
        //             }
        //             </tr>
        //         )
        //     });
        // }
        return (
            <Table>
                <thead>
                    <tr>
                        {this.props.headers.map((x , i) => 
                            <th key={i}>{x.name}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {this.props.rows.map((ind, i) =>
                        <tr key={i}>{
                            this.props.headers.map((col, j) => <td key={`col-${j}`}>{ind}</td>)
                        }</tr>)}
                </tbody>
            </Table>
        );
    }
}

export default TablePerfomance;