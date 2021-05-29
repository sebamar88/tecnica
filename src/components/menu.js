import React from 'react';
import {Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Links = styled(Link)`
  text-decoration: none;
  color:inherit;
  display:flex;
  width: 100%;
  padding: 15px 50px;
  &:hover{
    text-decoration: none;
  }
`;
const MenuItems = styled(MenuItem)`
  padding:0 !important;
`




const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }));
  
const Menu = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
  
    return (
      <div className={classes.root}>        
        <div>

            
          
        <Button
            variant="contained"
            size="large"
            className={classes.button}
            startIcon={<MenuIcon />}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
        >Menu</Button>

          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                      <MenuItems><Links to={'/'}>home</Links></MenuItems>
                      <MenuItems><Links to="!#">about us</Links></MenuItems>
                      <MenuItems><Links to={'/proyectos'}>works</Links></MenuItems>
                      <MenuItems><Links to="!#">our team</Links></MenuItems>
                      <MenuItems><Links to="!#">find us</Links></MenuItems>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }

  export default Menu;