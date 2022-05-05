import React, { Fragment } from "react"
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Dashboard from "./Dashboard"
import Login from "./Login"
import Register from "./Register"
import AddBook from "./AddBook";
import BookList from "./BookList";
import UserList from "./UserList";

const DisplayContent = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/addbook" element={<AddBook />} />
                <Route path="/booklist" element={<BookList />} />
                <Route path="/userlist" element={<UserList />} />
            </Routes>
        </Fragment>
    )
}

export default DisplayContent