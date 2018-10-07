import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Table from "../../components/Table/Table";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import { css } from "emotion";
import { Link } from 'react-router-dom'
import { Route } from "react-router-dom";
import NewStudent from "./NewStudent";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
const addNew = css`
  float: right;
  position: absolute;
  right: 26px;
  top: 24px;
  cursor: pointer;
  color: white;
`
function StudentList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Student List</h4>
            <p className={classes.cardCategoryWhite}>
              Manage student, create, update information of student
            </p>
            <Link to="/students/new" className={addNew}>New Student</Link>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="warning"
              tableHead={["ID", "Name", "Country", "City", "Salary", ""]}
              tableData={[
                ["", "Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["", "Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["", "Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["", "Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                ["", "Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(StudentList);
