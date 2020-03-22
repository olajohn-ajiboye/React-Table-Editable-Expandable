import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import NavAvatar from '../NavAvatar'

import './NavBar.scss'

const MOCK_USER = {
    firstName: 'Dummy',
    lastName: 'User',
}

const NavBar = () => {
    return (
        <AppBar position="static" color="inherit" className="NavBar">
            <Toolbar className="Toolbar">
                <div className="screen-links">
                    <Link to="/">
                        <Button variant="contained">Staffing</Button>
                    </Link>
                    <Link to="/members">
                        <Button variant="contained">Members</Button>
                    </Link>

                    <Link to="/projects">
                        <Button variant="contained">Projects</Button>
                    </Link>
                </div>
                <div className="avatar">
                    <Typography variant="body2">
                        {' '}
                        {MOCK_USER.firstName} {MOCK_USER.lastName}
                    </Typography>
                    <NavAvatar />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
