import React ,{ Component } from 'react';
import PropTypes from 'prop-types';


export default class Contest extends Component {
    componentDidMount() {
        this.props.fetchNameList(this.props.nameIds)
    }
    
    style = {
        marginTop: '2rem',
        color: 'blue'
    }

    render() {
        return(
            <div className="contest container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="panel-title"> Contest Description </div>
                    </div>
                    <div className="panel-body">
                        <section className="text-justify">
                            { this.props.description }
                        </section>
                    </div>    
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="panel-title"> Proposed Names </div>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                        { this.props.nameIds.map( nameId => 
                            <li key={nameId} className="list-group-item"> { this.props.lookupNames(nameId).name } </li>
                        )}
                        </ul>
                    </div>    
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading bg">
                        <div className="panel-title"> Proposed a new Names </div>
                    </div>
                    <div className="panel-body">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Propose a new name" />
                            <div className="input-group-btn">
                                <button className="btn btn-submit bg-primary"> Submit </button>
                            </div>
                        </div>
                    </div>    
                </div>

                <div className="btn btn-default link" 
                    style={this.style}
                    onClick={this.props.backToHomeBtn}>
                    Back to home
                </div>
            </div>
        )
    }
}

Contest.propTypes = {
    description: PropTypes.string.isRequired,
    backToHomeBtn: PropTypes.func.isRequired,
    fetchNameList: PropTypes.func.isRequired,
    nameIds: PropTypes.array.isRequired,
    lookupNames: PropTypes.func.isRequired,
}