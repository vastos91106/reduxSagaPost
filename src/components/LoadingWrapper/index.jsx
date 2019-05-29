import React from 'react';

const LoadingWrapper = ({isLoading, percent, children}) => {
    return isLoading ?
        <div className="progress">
            <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="60"
                 aria-valuemin="0" aria-valuemax="100"
                 style={{width: `${percent}%`}}>
            </div>
        </div>
        : children;
};

export default LoadingWrapper;