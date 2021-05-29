import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }));


const ContactButton = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <div>
            <Button
            href={'/contacto'}
            startIcon={<ContactMailOutlinedIcon />}
            size="large"
            component={Link}
            variant="contained"
            >
            Contacto
            </Button>
            </div>
        </div>
        
    );
}
 
export default ContactButton;