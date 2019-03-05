import React, { Component } from 'react';
import styled from 'styled-components';
// import Perf from 'react-addons-perf';



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


    componentDidUpdate() {
        // Perf.stop();
        // Perf.printExclusive();
        // Perf.printWasted();
    }




    // paintCell = (event) => {
    //     event.target.classList.add('cell-active');
    //     // Perf.start();

    // }

    componentWillMount() {
        window.performance.mark('TablePerfomance')
    }

    componentDidMount() {
        console.log(window.performance.now('TablePerfomance'))
    }
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        {this.props.rows.map((title, index) => <th key={`row-${index}`}>{title}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {this.props.rows.map((ind, i) =>
                        <tr key={i}>{
                            this.props.rows.map((col, j) => <td key={`col-${j}`}  >{col}</td>)
                        }</tr>)}
                </tbody>
            </Table>
        );
    }
}

export default TablePerfomance;