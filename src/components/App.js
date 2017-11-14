import React from 'react';
// Navbar section
import Header from './Header';
// data Json
import ContestPreview from './ContestPreview';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/* Header - Navbar */}
                <Header Brand="Naming Contest" />
                {/* 
                  * @container-fluid is contain
                  * 
                  * [1] content using props.contest.map
                  */}
                <div className="container-fluid" style={{marginTop: '8rem'}}>
                    {this.props.contest.map( contest => 
                        <ContestPreview {...contest} />
                    )}
                </div>
            </div>
        );
    };
};

export default App;
