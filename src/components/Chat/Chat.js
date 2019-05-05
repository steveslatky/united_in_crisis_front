import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";

const styles = {
    card: {
        maxWidth: 200,
        margin: 20,
        padding: 20,
        display: "inline-block"
    },
    chat: {
    }
};

const question_states = [
    {0: "Repeat question", 1: "Next question"},
    {0: "Start over", 1: "Repeat question"},
];

class Chat extends React.Component {

    handleClick = (event) => {
        alert(event.currentTarget.value);
    };

  render() {
      this.state = 0;
      const { classes } = this.props;
      const { question_state } = 0;
    return (
      <div className="chat">
          <Grid container justify="center" alignItems="center">
            {Object.keys(question_states[this.state])
                .map((question, i) => (
                    <Grid item>
                        <CardActions>
                        <Card className={classes.card} value={question} onClick={this.handleClick}>
                            <CardContent>
                                <Typography>
                                    {question_states[this.state][question]}
                                </Typography>
                            </CardContent>
                        </Card>
                        </CardActions>
                    </Grid>
                ))}
          </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Chat)
