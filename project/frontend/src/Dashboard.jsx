import * as React from 'react';
import DataProvider from "./components/DataProvider";
import Table from "./components/Table";
import Form from "./components/Form";

class Dashboard extends React.Component {
  render() {
    return(
      <React.Fragment>
        <DataProvider endpoint="api/lead/" render={data => <Table data={data} />} />
        <Form endpoint="api/lead/" />
      </React.Fragment>
    )
  }
}

export default Dashboard