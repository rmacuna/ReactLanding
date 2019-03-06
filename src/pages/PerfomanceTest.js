import React, { Component } from 'react';
import TablePerfomance from '../components/TablePerfomance';
import TopBarProgress from "react-topbar-progress-indicator"
import './PerfomanceTest.scss';
// import Perfomance from 'react-addons-perf';



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
            rows: []
        };

        this.doPerfomanceTest = this.doPerfomanceTest.bind(this);
        this.addCells = this.addCells.bind(this);
        this.removeCells = this.removeCells.bind(this);
        this.reloadTable = this.reloadTable.bind(this);


       
    }

    doPerfomanceTest() {
        this.setState({
            isButtonInitActive: !this.state.isButtonInitActive,
            rows: new Array(8000).fill(1),
        }, () => {
            let target = document.getElementById('target');
            target.classList.remove('hidden');
            target.scrollIntoView({ behavior: 'smooth' });
        })
    }

    addCells() {
        this.setState({
            rows: this.state.rows.concat(new Array(100).fill(1)),
        });

    }

    removeCells() {
       this.setState(({
           rows: new Array(this.state.rows.length > 100 ? (this.state.rows.length - 100) : 0 ).fill(1)
       }))
    }

    reloadTable() {
        this.setState({
            rows: [],
            loading: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    rows: new Array(8000).fill(1),
                    loading: false
                })

            }, 300)
        })

    }

    showResults() {
        let target = document.getElementById('infoContainer');
        target.classList.remove('hidden');
        target.scrollIntoView({ behavior: 'smooth' });
    }

    render() {

        const Days = [
            {name: 'Day 1', id: 'day1'},
            {name: 'Day 2', id: 'day2'},
            {name: 'Day 3', id: 'day3'},
            {name: 'Day 4', id: 'day4'},
            {name: 'Day 5', id: 'day5'},
            {name: 'Day 6', id: 'day6'},
            {name: 'Day 7', id: 'day7'},
            {name: 'Day 8', id: 'day8'},
            {name: 'Day 9', id: 'day9'},
            {name: 'Day 10', id: 'day10'}, 
            {name: 'Day 11', id: 'day11'},
            {name: 'Day 12', id: 'day12'},
            {name: 'Day 13', id: 'day13'},
            {name: 'Day 14', id: 'day14'},
            {name: 'Day 15', id: 'day15'},
            {name: 'Day 16', id: 'day16'},
            {name: 'Day 17', id: 'day17'},
            {name: 'Day 18', id: 'day18'},
            {name: 'Day 19', id: 'day19'},
            {name: 'Day 20', id: 'day20'},
            {name: 'Day 21', id: 'day21'},
            {name: 'Day 22', id: 'day22'},
            {name: 'Day 23', id: 'day23'},
            {name: 'Day 24', id: 'day24'},
            {name: 'Day 25', id: 'day25'},
            {name: 'Day 26', id: 'day26'},
            {name: 'Day 27', id: 'day27'},
            {name: 'Day 28', id: 'day28'},
            {name: 'Day 29', id: 'day29'},
            {name: 'Day 30', id: 'day31'},
        ]




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
                        {this.state.loading && <TopBarProgress />}
                        <div className="container__perfomance">

                            <div className="container_actions">
                                <h1 className="Operation">Click one operation</h1>
                                <div className="Action__Items">
                                    {/* <button onClick={this.paintAllCells} className="buttons-actions ">Paint all cells</button> */}
                                    <button onClick={this.removeCells} className="buttons-actions ">Remove to 100 cells</button>
                                    <button onClick={this.addCells} className="buttons-actions ">Add 100 cells</button>
                                    <button onClick={this.reloadTable} className="buttons-actions ">Reload the table</button>
                                </div>
                            </div>

                            <h1>Simulated table of { Days.length + 'x' + this.state.rows.length}</h1>

                            {/* Container for the table */}
                            <div className="container_table">
                                <TablePerfomance
                                     headers= { Days }    
                                     rows={ this.state.rows }></TablePerfomance>
                            </div>
                            <div className="centered_button_wrapper">
                                <button onClick={this.showResults} className="buttons-actions button-result"> Show results</button>
                            </div>

                        </div>
                        <div id="infoContainer" className="container__information hidden">
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