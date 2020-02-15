import React from "react";
import Button from "../../components/CustomButtons/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default class NavDrawerBody extends React.Component {

   render() {
      return (
         <List>
            <ListItem>
               <Button
                  round
                  style={{ color: "white", background: "#4342D2", width: "148px" }}
                  onClick={() => {
                     this.props.login();
                  }}
               >
                  Login
               </Button>
            </ListItem>
         </List>);
   }
}
