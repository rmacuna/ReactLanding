import React, { Component } from 'react';
import TablePerfomance from '../components/TablePerfomance';
import TopBarProgress from "react-topbar-progress-indicator"
import './PerfomanceTest.scss';



TopBarProgress.config({
    barColors: {
      "0": "#daff63",
      "0.5": "#daff63",
      "1.0": "#6ef7ad"
    },
    shadowBlur: 5,
    barThickness: 6
  })



class PerfomanceTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isButtonInitActive: true,
            loading: false,
            INFORMATION: new Array(150).fill(1)
        };
        this.doPerfomanceTest = this.doPerfomanceTest.bind(this);
    }
    doPerfomanceTest() {
        
        this.setState({
            isButtonInitActive: !this.state.isButtonInitActive,
            loading: !this.state.loading
        })
        setTimeout(() => {
            var target = document.getElementById('target');
            target.classList.remove('hidden');
            target.scrollIntoView({ behavior: 'smooth' });
            this.setState({
                loading: !this.state.loading
            })
        }, 500);
       
    }

    showResults () {
        let target = document.getElementById('infoContainer');
        target.classList.remove('hidden');
        target.scrollIntoView({ behavior: 'smooth' });
    }
   
    render() {
        return (
            <React.Fragment>
                <div className="background__perfomance">
                    <div className="MainContainer">
                        <h1 className="HeaderTitle">Perfomance test (React)</h1>
                        <h4>Roberto Acuña, William Cadenas, Elkin Rodriguez</h4>
                        {this.state.isButtonInitActive ? <button onClick={this.doPerfomanceTest} className="InitButton">INICIAR</button> : null}
                    </div>
                </div>
                {this.state.isButtonInitActive ?
                    null :
                    <div id="target" className="perfomance_section hidden">
                        {this.state.loading && <TopBarProgress/>}
                        <div className="container__perfomance">

                            <div className="container_actions">
                                <h1 className="Operation">Click one operation</h1>
                                <div className="Action__Items">
                                    <button onClick={this.paintAllCells} className="buttons-actions ">Paint all cells</button>
                                    <button onClick={this.removeCells} className="buttons-actions ">Remove 100 cells</button>
                                    <button onClick={this.addCells} className="buttons-actions ">Add 100 cells</button>
                                    <button onClick={this.reloadTable} className="buttons-actions ">Reload the table</button>
                                </div>
                            </div>

                            <h1>Simulated table of {this.state.INFORMATION.length + 'x'  + this.state.INFORMATION.length  }</h1>

                            {/* Container for the table */}
                            <div className="container_table">
                                <TablePerfomance onPaintAllCells={this.paintAllCells}  tableData={this.state.INFORMATION}></TablePerfomance>
                            </div>
                            <div className="centered_button_wrapper">
                                <button onClick={this.showResults} className="buttons-actions button-result"> Show results</button>
                            </div>

                        </div>
                        <div id="infoContainer" className="container__information hidden">
                            {this.state.loading && <TopBarProgress/>}
                            <div className="results_card_container ">

                                <section className="NavyCard">
                                    <h3 className="subtitle">Benchmark</h3>
                                    <h1 className="title">Summary</h1>


                                    <div className="content">
                                        <div className="ThreeRowContainer">
                                            <div className="col">
                                                <section className="subCard">
                                                    {/* <h1>{{ item.Action }}</h1>
                                                <p>
                                                    {{ item.time_elapsed }}
                                                </p> */}
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div >
                    </div >

                }

            </React.Fragment >
        );
    }


}

export default PerfomanceTest;