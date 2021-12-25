import { useState } from 'react';
import Stars from './Stars';
import SelectStars from './SelectStars';

import './main.css';

const StarsLayout = () => {

    const [stars, setStars] = useState(0);


    return (
        <div>
            <h1>Movie Rating</h1>
            <h3>Component Stars (StarsLayout)</h3>
            <div className="stars-container">
                <SelectStars handleSetStars={setStars} />
                <Stars count={stars} />
            </div>
        </div >
    )
};

export default StarsLayout;

