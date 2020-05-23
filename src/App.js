import React from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }
    componentDidMount() {
        debugger;
        axios.get("http://localhost:8080/weather/aboveFixedTemp").then(res => {
            
            this.setState({
                items: res.data
            })
            console.log(this.state.items);
        }).catch((err) => {
            console.log("Error: ", err);
        })
    }
    render() {
        return (
            <div>
                <h1 className="text-center m-3">Welcome to Macedonian forecast in next 16 days</h1>
                <div className="container" style={{maxWidth: "1140px !important"}}>

                    <table className="table table-hover table-bordered table-dark">
                        <thead>
                        <tr className="bg-danger active">
                            <td colspan="5" className="">City name</td>
                            <td colspan="5">Date</td>
                            <td colspan="5">Max day temperature</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td colspan="5">{item.city_name}</td>
                                        <td colspan="5"> {item.date}</td>
                                        <td colspan="5">{item.maxTemp}</td>
                                    </tr>)
                            })
                        }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default App;
