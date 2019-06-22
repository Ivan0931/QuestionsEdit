import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

export class App extends React.Component<{},{}> {
  constructor(props: any) {
    super(props);
  };


  render(): JSX.Element {
    return (
      <div className="App">
        <Grid container>

        </Grid>
      </div>
    );  
  }
}



export default connect<null, null, {}>(null, null)(App);
