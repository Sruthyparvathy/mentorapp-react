import React,{useEffect} from 'react';
// import logo from '../Image/tarentologo.png';
import '../App.css';
import {InlineReactionButtons} from 'sharethis-reactjs';
import {InlineShareButtons} from 'sharethis-reactjs';
import {StickyShareButtons} from 'sharethis-reactjs';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../Image/image.jpg';
import axios from 'axios';
import * as API from '../constants/Api';
import  { useRef, useState } from 'react';

const useStyles = makeStyles({
    root: {
      maxWidth: '360px',
      marginLeft:'38.5%',
      marginTop:'0.5%',
      height:'600px',
    },
  });
export default function Publicshare(props) {
  
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);
  const [recipient, setRecipient] = React.useState('');
  const [note, setNote] = React.useState('');
  const [sender, setSender] = React.useState('');
  const[imageId,setImageId]=useState();  

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };

  // useEffect(() => {
  //   axios
  //     .get(API.RETRIEVE_WISH,{ params:{shareId: props.shareId}})
  //     .then(response  => setSender(response.sender),
  //     setNote(response.note),
  //     setRecipient(response.recepient),
  //     setSender(response.sender),
  //     setImageId(response.imageId));
  // },[]);


  const classes = useStyles();
  return (
    <div>
     <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          width='405.26'
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Thank you Ramesh!
          </Typography>
          <Typography variant="body" color="textSecondary" component="p">
            happy
          </Typography>
          <Typography variant="h6" style={{float:"right"}}>
            Arpan Das
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
    <style dangerouslySetInnerHTML={{__html: `
      html, body {
        margin: 0;
        padding: 0;
        text-align: center;
      }
      h1 {
        font-size: 24px;
        font-weight: bold;
      }
      hr {
        margin-bottom: 40px;
        margin-top: 40px;
        width: 50%;
      }
    `}} />
<div>
      <div style={{paddingTop:'1%'}}></div>
      {/* <form >
        <textarea 
          ref={textAreaRef}
          value='sdefg'
        />
      </form>
      {
       /* Logical shortcut for only displaying the 
          button if the copy command exists */
    //    document.queryCommandSupported('copy') &&
    //     <div>
    //       <button onClick={copyToClipboard}>Copy</button> 
    //       {copySuccess}
    //     </div>
      } */
    </div>
    <div style={{paddingTop:'1%'}}></div>
    {/* <InlineShareButtons
      config={{
        alignment: 'center',  // alignment of buttons (left, center, right)
        color: 'social',      // set the color of buttons (social, white)
        enabled: true,        // show/hide buttons (true, false)
        font_size: 16,        // font size for the buttons
        labels: 'cta',        // button labels (cta, counts, null)
        language: 'en',       // which language to use (see LANGUAGES)
        networks: [           // which networks to include (see SHARING NETWORKS)
          'whatsapp',
          'facebook',
          'linkedin',
          'twitter'
          
        ],
        padding: 12,          // padding within buttons (INTEGER)
        radius: 4,            // the corner radius on each button (INTEGER)
        show_total: false,
        size: 40,             // the size of each button (INTEGER)

        // OPTIONAL PARAMETERS
        url: 'https://www.tarento.com', // (defaults to current url)
        image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
        description: 'custom text',       // (defaults to og:description or twitter:description)
        title: 'custom title',            // (defaults to og:title or twitter:title)
        message: 'custom email text',     // (only for email sharing)
        subject: 'custom email subject',  // (only for email sharing)
        username: 'custom twitter handle' // (only for twitter sharing)
      }}
    /> */}
    
    {/* <StickyShareButtons
      config={{
        alignment: 'left',    // alignment of buttons (left, right)
        color: 'social',      // set the color of buttons (social, white)
        enabled: true,        // show/hide buttons (true, false)
        font_size: 16,        // font size for the buttons
        hide_desktop: false,  // hide buttons on desktop (true, false)
         labels: 'cta',     // button labels (cta, counts, null)
        language: 'en',       // which language to use (see LANGUAGES)
         min_count: 0,         // hide react counts less than min_count (INTEGER)
        networks: [           // which networks to include (see SHARING NETWORKS)
          'whatsapp',
          'linkedin',
          'messenger',
          'facebook',
          'twitter'
        ],
        padding: 12,          // padding within buttons (INTEGER)
        radius: 4,            // the corner radius on each button (INTEGER)
        show_total: false,     // show/hide the total share count (true, false)
        show_mobile: true,    // show/hide the buttons on mobile (true, false)
        show_toggle: true,    // show/hide the toggle buttons (true, false)
        size: 48,             // the size of each button (INTEGER)
        top: 160,             // offset in pixels from the top of the page

        // OPTIONAL PARAMETERS
        url: 'https://www.sharethis.com', // (defaults to current url)
        image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
        description: 'custom text',       // (defaults to og:description or twitter:description)
        title: 'custom title',            // (defaults to og:title or twitter:title)
        message: 'custom email text',     // (only for email sharing)
        subject: 'custom email subject',  // (only for email sharing)
        username: 'custom twitter handle' // (only for twitter sharing)

      }}
    /> */}
  </div>
  );
}

