import * as React from 'react';
import DataProvider from "./components/DataProvider";
import Table from "./components/Table";
import Form from "./components/Form";
import Navbar from './components/Navbar';

class Dashboard extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Navbar></Navbar>
        <section className="section">
          <div className="container">
            <DataProvider endpoint="api/lead/" render={data => <Table data={data} />} />
            <Form endpoint="api/lead/" />
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Dashboard