import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CourseComponent from '../component/CourseComponent'

class InstructorApp extends Component {
    render() {
        return (
            <Router>
            <React.Fragment>
               
              <h1>Instructor Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/courses" exact component={ListCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />
                    </Switch>
                    
            </React.Fragment>
            </Router>
        )
    }
}

export default InstructorApp