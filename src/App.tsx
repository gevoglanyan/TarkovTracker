import React from 'react';

import './App.css'

import Navigation from "@navigation/navigation";

import HomeView from "@views/home/home";
import TasksView from "@views/tasks/tasks";
import HideoutView from "@views/hideout/hideout";

import {HashRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
    const routes = [
        {
            path: "/",
            component: <HomeView/>
        },
        {
            path: "/tasks",
            component: <TasksView/>
        },
        {
            path: "/hideout",
            component: <HideoutView/>
        }
    ]

    return (
        <Router>
            <div id={"app"}>
                <Navigation/>
                <div className={``}>
                    <div className={'view'}>
                        <Routes>
                            { routes.map(route => (
                                <Route key={route.path} path={route.path} element={route.component}/>
                            ))}
                        </Routes>
                    </div>
                </div>

            </div>
        </Router>
    )
}

export default App