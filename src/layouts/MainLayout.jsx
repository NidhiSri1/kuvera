import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/headerComponent/Header';
import { Box } from '@mui/material';

const MainLayout = () => {
    return (
        <Box>
            <Header />
            <Outlet />
        </Box>
    );
};

export default MainLayout;