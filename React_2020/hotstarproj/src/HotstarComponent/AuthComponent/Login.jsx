import React, { Component, Fragment } from 'react'
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <section className="card d-flex vh-100 col-md-4 mx-auto">
                    <article className="form-block">
                        <h2>Login</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="username">Username
                                    </label>
                                    <input type="text" className="form-control" name="username" />
                                    </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="text" className="form-control" name="password" />
                                    </div>
                                <div className="form-group">
                                    <button className="btn btn-block btn-primary"> Login

                                    </button>
                                    </div>
                            </form>
                        </div>
                    </article>
                </section>
            </Fragment>
        );
    }
}

export default login;