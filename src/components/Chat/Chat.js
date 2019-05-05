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
    {0 : "Sleep Habits Change", 2 : "Flu like symptoms", 3 : "Unplanned weight loss",
    4 : "Reduction in energy levels"}
];

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = 0;
    }

    handleClick = (event) => {
        alert(event.currentTarget.value);
    };

  render() {
      this.state = 0;
      const { classes } = this.props;
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
