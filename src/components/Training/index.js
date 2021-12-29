import { useState } from 'react';

import TrainingForm from './TrainingForm';
import TrainingTable from './TrainingTable';

import './main.css';


const Training = () => {

    // работа с Array 
    const [trainings, setTrainings] = useState([]);
    // работа с Map
    //const [trainings, setTrainings] = useState(new Map());


    const [curTraining, setCurTraining] = useState({
        date: '',
        distance: '',
        bEdit: false
    });

    function handleChange(newItem) {
        setCurTraining((prev) => ({ ...prev, ...newItem }));
    }

    function addTraining(date, distance) {
        // работа с Array
        setTrainings((prev) =>
            prev.filter((el) => el.date != date)
            .concat({
                date: date,
                distance: distance +
                    (prev.some(el => el.date === date) && !curTraining.bEdit ?
                        prev.find((el) => el.date === date).distance :
                        0)
            })
            .sort((a, b) => (new Date(a.date)).getTime() > (new Date(b.date)).getTime() ? -1 : 1));

        // работа с Map()
        //setTrainings((prev) => prev.set(distance + prev.has(date) ? prev.get(date) : 0));


        setCurTraining({ date: '', distance: '', bEdit: false });
    }

    function delTraining(date, distance) {
        // работа с Array
        setTrainings((prev) =>
            prev.filter((el) => el.date != date)
                .sort((a, b) => (new Date(a.date)).getTime() > (new Date(b.date)).getTime() ? -1 : 1));

    }


    function editTraining(selectedDate) {
        setCurTraining({
            date: selectedDate,
            distance: ((trainings.some(el => el.date === selectedDate) ? trainings.find((el) => el.date === selectedDate).distance : 0)).toString(),
            bEdit: true
        });

    }

    return (
        <div>
            <h1>Учёт тренировок</h1>
            <h3>Компонент Training</h3>
            <div className="training-container">
                <TrainingForm
                    handleSubmit={addTraining}
                    handleChange={handleChange}
                    date={curTraining.date}
                    distance={curTraining.distance}
                />
                <TrainingTable
                    items={trainings}
                    handleEdit={editTraining}
                    handleDel={delTraining}
                />
            </div>
        </div>
    )
};


export default Training;