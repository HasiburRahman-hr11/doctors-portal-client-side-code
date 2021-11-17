import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Appointments from './Admin/Pages/Appointments/Appointments';
import Dashboard from './Admin/Pages/Dashboard/Dashboard';
import ManageUsers from './Admin/Pages/ManageUsers/ManageUsers';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PageScroll from './Components/PageScroll/PageScroll';
import PrivateRoute from './utils/PrivateRoute';
import Services from './Admin/Pages/Services/Services';
import EditUser from './Admin/Pages/EditUser/EditUser';
import AdminRoute from './utils/AdminRoute';
import EditAppointment from './Admin/Pages/EditAppointment/EditAppointment';
import Profile from './Pages/Profile/Profile';
import SingleAppointment from './Admin/Pages/SingleAppointment/SingleAppointment';
import Payment from './Pages/Payment/Payment';

const App = () => {
  return (
    <BrowserRouter>
      <PageScroll />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <PrivateRoute exact path="/appointment">
          <Appointment />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute path="/payment/:appointmentId">
          <Payment />
        </PrivateRoute>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>

        <AdminRoute exact path="/admin">
          <Dashboard />
        </AdminRoute>
        <AdminRoute exact path="/admin/services">
          <Services />
        </AdminRoute>
        <AdminRoute exact path="/admin/appointments">
          <Appointments />
        </AdminRoute>
        <AdminRoute exact path="/admin/appointments/:id">
          <SingleAppointment />
        </AdminRoute>
        <AdminRoute exact path="/admin/appointments/edit/:id">
          <EditAppointment />
        </AdminRoute>
        <AdminRoute exact path="/admin/users">
          <ManageUsers />
        </AdminRoute>
        <AdminRoute exact path="/admin/users/edit/:email">
          <EditUser />
        </AdminRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
