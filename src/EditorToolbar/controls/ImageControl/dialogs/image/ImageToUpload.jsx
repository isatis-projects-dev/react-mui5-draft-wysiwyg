import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material';

const useStyles = (theme) => {
    return {
        imgWrapper: {
            maxWidth: '100%',
            maxHeight: 300,
            overflow: 'auto',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    };
};

function ImageToUpload({ width, height, src }) {
    const classes = useStyles(useTheme());

    return (
        <div className={classes.imgWrapper}>
            <img alt="" width={width} height={height} src={src} />
        </div>
    );
}

ImageToUpload.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
};

export default ImageToUpload;
