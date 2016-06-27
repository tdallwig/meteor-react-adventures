import React from 'react';
import AccountsUI from '../AccountsUI.jsx'

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <header>
            <h2>Meteor + React Playground</h2>
            <nav>
                <a href="/">Resolutions</a>
                <a href="/about">About</a>
                <a href="/Bonus">Bonus</a>
                <AccountsUI />
            </nav>
        </header>
        <main>
            {content}
        </main>
    </div>
)
