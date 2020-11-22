import React, { Component,Fragment } from 'react';
import "./Search.css";
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            term:"",
         };
    }
    handleChange = e=>{
        this.setState({term: e.target.value});

    };
    handleSubmit = e=>{
        e.preventDefault();
        /*console.log(this.state.term);&#x002A;&#xFE0F;&#x20E3;
        */
       this.props.onTermSubmit(this.state.term)
    };
 
    render() { 
        return (
            <Fragment>
                <section>
                    <article>
                        <form onSubmit={this.handleSubmit}>
                            <input  type="text"className="form control"placeholder="search"name="term"value={this.state.term} onChange={this.handleChange}/>
                            <span className="searchIcon">
                            <i class="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </form>
                    </article>
                </section>
            </Fragment>
          );
    }
}
 
export default Search;