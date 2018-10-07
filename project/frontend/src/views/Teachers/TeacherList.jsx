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
`

function TeacherList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Teacher Table</h4>
            <p className={classes.cardCategoryWhite}>
              Manage teacher information, create, update information of teacher
            </p>
            <div className={addNew}>New Teacher</div>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="warning"
              tableHead={["Name", "Major", "Status", "Update Image", ""]}
              tableData={[
                ["Dakota Rice", "Phisic", "Teaching", "Yes"],
                ["Minerva Hooper", "Curaçao", "", "Yes"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "Yes"],
                ["Philip Chaney", "Korea, South", "Overland Park", "Yes"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "Yes"],
                ["Mason Porter", "Chile", "Gloucester", "No"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TeacherList);
