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

const records = [
  {
    "album": "Coloring Book",
    "artist": "Chance The Rapper",
    "image": "../../assets/chance.png",
    "tracks": [ "One","Two","Three","Four"],
    "notes": "This album is so happy!"
  },
  {
    "album": "Late Registration",
    "artist": "Kanye West",
    "image": "../../assets/kanye.jpg",
    "tracks": [ "One","Two","Three","Four"],
    "notes": "This album is very good!"
  },

];


/* IDEAS & TO-DO:
    + Top 5, Top Tier, and Other Favorites bins:
        + Show all album art at once for Top 5
        + Flip through Top Tier and Other Favorites
    + 3D Transform record bin, like the hip-hop Google Doodle
    + Liner notes page:
        + Tracklist
        + Story
        + Music player
    + Controls UI on record bin:
        + Icon for albums with liner notes
        + Link to more info about band/albums
        + Arrows for flipping through albums
    + Use JS map fn for JSON albums to displayed
*/


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

  constructor(props) {
    super(props);
    this.state = {
        open: false
    }
  }

  openAlbum = (data) => {
    this.setState({ open: true });
  }


  render () {
    return(
      <div className={styles.binContainer} >
          <div className={styles.binFront}></div>
          <div className={styles.binBack}>
            <div className={styles.records}>
                <Album className={styles.album} image={records[0].image} />
                <Album className={styles.album} image={records[1].image} />
                <img className={styles.album} src="../../assets/paak.png" />
                <img className={styles.album} src="../../assets/frank.jpg" />
                <img className={styles.album} src="../../assets/glass_animals.jpg" />
            </div>
        </div>
        {/* <LinerNotes className={styles.currentAlbumContainer} openAlbum={this.openAlbum}/> */}
      </div>
    );
  }
}

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });

// conditionally render small or full screen view of album

  render () {
    const albumOpen = this.state.open;
    return (
      <div>
      { albumOpen ? (
        <div className={styles.currentAlbumContainer}>
          <button className={styles.closeButton} onTouchTap={this.handleClose}>Close</button>
        </div>
      ) : (
        <img className={styles.album} src={this.props.image} onTouchTap={this.handleOpen}/>
    )}
      </div>
    );
  }
}
