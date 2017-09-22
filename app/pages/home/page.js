/* page.js -- home
Author: Erik Mudrak - Spring 2017 - Senior Seminar project
Description: Implements home page of web app
*/

// Imports:
import React from 'react';
import { browserHistory } from 'react-router';
import styles from "./style.css";
import MediaQuery from 'react-responsive';
import cookie from 'react-cookie';

// Material UI imports
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { Button } from 'semantic-ui-react';

import RecordStore from '../../assets/rs3.jpg';
import Record from '../../assets/record.png';
import Logo from '../../assets/logo.png';

// import RecordStore from './rs3.jpg';
// import Record from './record.png';
// import Logo from './logo.png';


/* -------------------- Home - MAIN COMPONENT ----------------------- */

export default class Home extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.backgroundImage} src={RecordStore} />
        <div className={styles.overlay} />
        <div className={styles.midCard} />
        <AppBar />
        <div className={styles.heading}>Your Record Bin</div>
        <div className={styles.recordImageWrapper}>
          <img className={styles.recordImage} src={Record} />
        </div>
        <Bin />
      </div>
    );
  }
}

class AppBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <nav className={styles.appBar}>
        <a href='#'>
          <img className={styles.logo} src={Logo} />
        </a>
        <a className={styles.barItem} href='#'>Bin</a>
        <a className={styles.barItem} href='#'>Discover</a>
        <a className={styles.barItem} href='#'>Feed</a>
      </nav>
    );
  }
}


class Bin extends React.Component {

  render () {
    return(
      <div className={styles.binContainer} >
        <div className={styles.binFront}>
        </div>
        <div className={styles.binBack}>
          <div className={styles.records}>
            <img className={styles.album} src="../../assets/chance.png" />
            <img className={styles.album} src="../../assets/kanye.jpg" />
            <img className={styles.album} src="../../assets/paak.png" />
            <img className={styles.album} src="../../assets/frank.jpg" />
            <img className={styles.album} src="../../assets/glass_animals.jpg" />
          </div>
        </div>
      </div>
    );
  }
}