import React, { Component, Fragment } from 'react'

class StateComponenet extends Components {
    state = {
        username: "Pinki",
        age: 24,
        company: "capgemini",
    }
    render() {
        return (
            <Fragment>
                <h1>  Hello  I am STate full i  am root components</h1>
                <StateComponenet />
            </Fragment>
        );
    }
}
export default StateComponenet;