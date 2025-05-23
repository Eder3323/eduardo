import React from 'react';
import './App.css';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import BackgroundMusic from './components/BackgroundMusic';
import ConfirmationForm from './components/ConfirmationForm';
import BabyAnnouncement from './components/BabyAnnouncement';
import QuoteFrame from './components/QuoteFrame';
import Credits from './components/Credits';


function App() {
    return (
        <div className="App min-h-screen w-full">
            <main className="relative w-full">
                <Hero />
                <EventDetails />
                <QuoteFrame />
                <BabyAnnouncement />
                <ConfirmationForm />
                <Credits />
            </main>
            <BackgroundMusic />
        </div>
    );
}

export default App;
