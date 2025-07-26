import React from 'react';
import { useParams } from 'react-router-dom';
import trainersMock from './trainersMock';

function TrainerDetails() {
  const { id } = useParams(); // Read the dynamic :id from the URL

  const trainer = trainersMock.find(t => t.trainerId === id);

  if (!trainer) return <h2>Trainer not found</h2>;

  return (
    <div>
      <h1>Trainers List</h1>
      <h2>{trainer.name}</h2>
      <p><strong>Email:</strong> {trainer.email}</p>
      <p><strong>Phone:</strong> {trainer.phone}</p>
      <p><strong>Domain:</strong> {trainer.domain}</p>
      <p><strong>Skills:</strong> {trainer.skills.join(', ')}</p>
    </div>
  );
}

export default TrainerDetails;
