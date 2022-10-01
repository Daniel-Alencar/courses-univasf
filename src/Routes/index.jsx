import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Course from '../pages/Course';
import About from '../pages/About';
import Docs from '../pages/Docs';
import Courses from '../pages/Courses';


export default function Routes({paletteType, setPaletteType}) {
    return (
        <Router>
            <Switch>

                <Redirect exact from="/" to="/courses" />

                <Route path="/courses" > 
                    <Courses paletteType={paletteType} setPaletteType={setPaletteType} />
                </Route>
                
                <Route path="/course/:key" >  
                    <Course paletteType={paletteType} setPaletteType={setPaletteType} />
                </Route>
                
                <Route path="/about">
                    <About paletteType={paletteType} setPaletteType={setPaletteType} />
                </Route>
                
                <Route path="/docs">
                    <Docs paletteType={paletteType} setPaletteType={setPaletteType} />
                </Route>

            </Switch>
        </Router>
    )
}
