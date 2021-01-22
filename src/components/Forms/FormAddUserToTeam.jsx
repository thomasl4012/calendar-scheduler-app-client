import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import MenuItem from "@material-ui/core/MenuItem";

export default class FormAddUserToTeam extends Component {
  render() {
    return (
      <div>
        <form onChange={this.props.onChange} onSubmit={this.props.onSubmit}>
          <TextField
            id="outlined-select-currency"
            label="Choose a user"
            select
            variant="outlined"
            name="user"
            onChange={this.props.onChange}
          >
            {this.props.dataFiltered.map((option) => (
              <MenuItem
                key={option.id.toLowerCase()}
                value={option.id.toLowerCase()}
              >
                {option.firstName} {option.lastName}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField
            id="outlined-select-currency"
            label="Choose a team"
            select
            variant="outlined"
            name="team"
            onChange={this.props.onChange}
          >
            {this.props.data_team.map((option) => (
              <MenuItem
                key={option.title.toLowerCase()}
                value={option.id.toLowerCase()}
              >
                {option.title}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<Icon>add</Icon>}
          >
            Add
          </Button>
        </form>
      </div>
    );
  }
}
