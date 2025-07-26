import React from 'react';
import trainersMock from './trainersMock';
import { Link } from 'react-router-dom';

function TrainerList() {

  return (
    <>
      <h1>Trainers List</h1>
      <ul>
        {trainersMock.map(trainer => (
          <li key={trainer.id}>
            <Link to={`/trainer/${trainer.trainerId}`}>{trainer.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TrainerList;
