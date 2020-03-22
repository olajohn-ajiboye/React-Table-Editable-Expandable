import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MembersScreen from 'students/presentation/MembersScreen'
import NavBar from 'common/presentation/components/NavBar'
import ProjectsScreen from 'courses/presentation/CoursesScreen'
import StaffingGrid from 'assignments/presentation/Assignments'

const AppRoute = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={StaffingGrid} />
                <Route path="/staffing" component={StaffingGrid} />
                <Route path="/members" component={MembersScreen} />
                <Route path="/projects" component={ProjectsScreen} />
            </Switch>
        </Router>
    )
}

export default AppRoute
