import { useState } from 'react';

import ColorForm from './ColorForm';

import './main.css';


const ColorConverter = () => {
    const [colorRGB, setColorRGB] = useState('');

    function getResult(colorHEX) {
        const errorMessage = 'Ошибка!'
        if (colorHEX.length < 7)
            return '';
        if (colorHEX[0] !== '#')
            return errorMessage;

        let res = [];
        for (let i = 1; i < 7; i += 2) {
            let colorRGB = Number("0x" + colorHEX[i] + colorHEX[i + 1]);
            if (!isNaN(colorRGB))
                res.push(colorRGB);
            else
                return errorMessage;
        }
        return 'rgb(' + res.join(',') + ')';
    }

    function handleResult(text) {
        setColorRGB(getResult(text));
    }

    return (
        <div>
            <h1>Конвертор цветов</h1>
            <h3>Компонент ColorConverter</h3>
            <div className="color-converter" style={{ background: colorRGB }} >
                <ColorForm result={colorRGB} handleGetResult={handleResult} />
            </div>
        </div>
    )
};


export default ColorConverter;