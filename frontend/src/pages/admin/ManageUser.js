import React from "react";

function ManageUser() {
    return (
        <div>
            <h1>Manage User</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Add User</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Mobile Number</label>
                                <input type="text" className="form-control" id="username" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="usertype" className="form-label">User Type</label>
                                <select className="form-control" id="usertype">
                                    <option value="">Select user type</option>                                
                                    <option value="farmer">Farmer</option>
                                    <option value="consumer">Customer</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                    <div className="col-md-8">
                        <h2>User List</h2>
                        {/* User list will be displayed here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageUser;
