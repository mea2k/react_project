import PropTypes from 'prop-types'
import { useState } from 'react';
import SelectStars from './SelectStars';
import Stars from './Stars';


const StarsLayout = () => {

    const [stars, setStars] = useState(0);


    return (
        <div>
            <h1>Movie Rating</h1>
            <h3>Component Stars (StarsLayout)</h3>
            <SelectStars handleSetStars={setStars} />
            <Stars count={stars}/>
        </div>
    )
};

export default StarsLayout;

