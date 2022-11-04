import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";
import SendIcon from "@material-ui/icons/Send";
import { FormControlLabel, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();

    setDetailsError(false);
    setTitleError(false);

    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category);
    }
  };
  return (
    <Container>
      <Typography
        variant="h2"
        component="h3"
        color="textSecondary"
        align="center"
        noWrap
        gutterBottom
      >
        Create
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note title"
          color="secondary"
          variant="outlined"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Note details"
          color="secondary"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel control={<Radio />} value="money" label="Money" />
            <FormControlLabel control={<Radio />} value="todos" label="Todos" />
            <FormControlLabel
              control={<Radio />}
              value="reminder"
              label="Reminder"
            />
            <FormControlLabel control={<Radio />} value="work" label="Work" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          startIcon={<SendIcon />}
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>

      {/* icons */}
      <br />
    </Container>
  );
}
