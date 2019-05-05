import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = {
    card: {
        maxWidth: 200,
    }
};



class Chat extends React.Component {
  render() {
      const { classes } = this.props;
    return (
      <div className="chat">
        <Card className={classes.card}>
            <CardContent>
                <Typography>
                    Hello World!
                </Typography>
            </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Chat)
