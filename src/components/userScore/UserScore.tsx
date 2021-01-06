import React from 'react';

import './userScore.scss'

type UserScoreProps = {
    
}

const UserScore: React.FunctionComponent<UserScoreProps> = () => {
    return (
        <div className='user-score-container'>
            <div className='user-image'></div>
            <span className='user-username'>Roploplo</span>
            <span className='user-score'>0</span>
        </div>
    );
}


export default UserScore;
