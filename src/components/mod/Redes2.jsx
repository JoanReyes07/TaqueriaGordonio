import * as React from 'react';
import { styled } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
}));

const actions = [
    { icon: <FacebookIcon />, name: 'Facebook', link: 'https://www.facebook.com' },
    { icon: <WhatsAppIcon />, name: 'WhatsApp', link: 'https://wa.me/' },
    { icon: <LocationOnIcon />, name: 'Location', link: 'https://www.google.com/maps' },
    { icon: <CallIcon />, name: 'Call', link: 'tel:+123456789' },
];

export default function PlaygroundSpeedDial() {
    const [direction, setDirection] = React.useState('left');
    const [hidden, setHidden] = React.useState(false);

    const handleDirectionChange = (event) => {
        setDirection(event.target.value);
    };

    const handleHiddenChange = (event) => {
        setHidden(event.target.checked);
    };

    const handleActionClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <StyledSpeedDial
            ariaLabel="SpeedDial playground example"
            hidden={hidden}
            icon={<SpeedDialIcon />}
            direction={direction}
            sx={{
                '& .MuiSpeedDial-fab': {
                    backgroundColor: '#329e58',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#329e58',
                    },
                },
            }}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={() => handleActionClick(action.link)}
                    sx={{
                        backgroundColor: '#329e58',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#2d7b47',
                        },
                    }}
                />
            ))}
        </StyledSpeedDial>
    );
}
