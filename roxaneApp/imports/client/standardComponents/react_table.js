import ReactTable from "react-table";
import 'react-table/react-table.css';
import React, { Component } from 'react';

export default class DataTable extends Component{
  constructor(){
    super();
    this.state = {
      selected : ""
    }
  }

  deleteItem(cellInfo){
    console.log("Not working yet");
  }

  getCollectionHeaders(){

    let headers = [];
    this.props.collection.forEach(a => headers.push(Object.keys(a)))
    let headers2 = headers[0];
    let headers3 = [];
    if(headers2){
      headers2.forEach(a => {
        if(a!="_id" && a!="created_at"){
            headers3.push({Header: a, accessor: a})
        }
      })
      headers3.push({Header: "Delete?", Cell: row => (<button onClick={() => this.deleteItem()}>&times;</button>)})
    }
    else{
      headers3 = [{
        Header: 'Name',
        accessor: 'name'
      }]
    }
    return headers3
  }

  render() {

    const data = this.props.collection;

    return(
      <ReactTable
        data={data}
        columns={this.getCollectionHeaders()}
      />
    )
  }
}
