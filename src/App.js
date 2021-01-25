import React, {Component} from 'react';
import GitUserList from './components/GitUserList';
import Search from './components/Search';
import GitService from "./services/GitService";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',  //search query
            filteredData: [] // data to be sent to the list for rendering
        }
    }

    async filterGitUsers(queryText) {
        queryText = queryText.toLowerCase().trim();
        let res = await GitService.getAPIResponse(queryText);
        // console.log("result : ", res);
        this.setState({
            query: queryText,
            filteredData: res
        });
    }

    render() {
        return (
            <div className='container-fluid'>
                <center><h2>GitUser Filter</h2></center>
                <Search doSearch={e => this.filterGitUsers(e)}/>
                <GitUserList userData={this.state.filteredData}/>
            </div>
        );
    }
}

export default App;
