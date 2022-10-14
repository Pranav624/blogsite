import React, { useState } from "react";
import { AppBar, styled, Toolbar, Box, Typography, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    })
    const MenuBox = styled(Box)({
        display: 'flex',
        gap: 30,
        cursor: 'pointer',
    })
    const MenuItems = [
        { Name: 'Home', Link: '#' },
        { Name: 'Blog', Link: '#' },
        { Name: 'Contact', Link: '#' },
    ];
    const [openMenu, setOpenMenu] = useState(false)
    return <AppBar color='default' position='sticky' elevation={2}>
        <StyledToolbar>
            <Box flex={{ xs: 25, md: 1 }}>
                <Typography variant='h4' color={'Blue'} sx={{ fontFamily: 'Caveat, cursive' }}>
                    Pranav Gonepalli
                </Typography>
            </Box>
            <Box flex={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuBox>
                    {MenuItems.map((item) => (
                        <Typography variant='body2' color={'Black'}>{item.Name}</Typography>
                    ))}
                </MenuBox>
            </Box>
            <MenuIcon
                sx={{ display: { xs: 'flex', md: 'none' }, cursor: 'pointer' }}
                onClick={() => setOpenMenu(!openMenu)}
            />
        </StyledToolbar>
        <Drawer anchor={'top'} open={openMenu} onClose={() => setOpenMenu(!openMenu)}>
            <List>
                <ListItem>
                    {MenuItems.map((item) => (
                        <ListItemButton>{item.Name}</ListItemButton>
                    ))}
                </ListItem>
            </List>
        </Drawer>
    </AppBar >;
};

export default Navbar;