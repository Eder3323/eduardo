import React from 'react';
import './App.css';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import BackgroundMusic from './components/BackgroundMusic';
import ConfirmationForm from './components/ConfirmationForm';
import BabyAnnouncement from './components/BabyAnnouncement';

function App() {
    return (
        <div className="App min-h-screen w-full">
            <main className="relative w-full">
                <Hero />
                <EventDetails />
                <BabyAnnouncement />
                <ConfirmationForm />
            </main>
            <BackgroundMusic />
        </div>
    );
}

export default App;
