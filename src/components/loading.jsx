import React, { useEffect, useState } from 'react';
import { Backdrop, CircularProgress, Typography, Box, keyframes } from '@mui/material';
import TaraSmall from '../assets/Tara_small.png';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingOverlay = ({ open }) => {
    return (
        <Backdrop
            sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1,
                background: 'linear-gradient(to right, #78B8BB, #000000 70%)',
            }}
            open={open}
            transitionDuration={{ appear: 0, exit: 500 }}
        >
            <Box
                width={'10vw'}
                alignContent={'center'}
                borderRadius={'50%'}
                sx={{
                    position: 'relative',
                    aspectRatio: '1/1',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to right, #80FFFF, #000000)',
                        transform: 'rotate(45deg)',
                        animation: `${rotate} 5s linear infinite`,
                    }
                    // backgroundSize: '200% 200%',
                    // animation: `${rotate} 5s linear infinite`,
                }}
            >
                <img src={TaraSmall} width={'100%'}
                    style={{ padding: '2em', position: 'relative', zIndex: 1 }}
                />
            </Box>
        </Backdrop>
    );
};

export default LoadingOverlay;