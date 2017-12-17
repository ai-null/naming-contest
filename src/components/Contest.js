import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import config, { ServerUrl } from '../../config'


export default class Contest extends Component {
    style = {
        marginTop: '2rem',
        color: 'blue'
    }

    componentDidMount() {
        this.props.fetchNameList(this.props.nameIds)
    }
    
    handleSubmit = (e) => {
        var input = this.refs.newName;
        e.preventDefault();
        this.props.addName(input.value, this.props._id);
        input.value = '';
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
                        <form 
                            onSubmit={this.handleSubmit}>
                            <div className="input-group">
                                <input type="text" className="form-control" 
                                        placeholder="Propose a new name"
                                        ref="newName"/>
                                <div className="input-group-btn">
                                    <button className="btn btn-submit bg-primary"> Submit </button>
                                </div>
                            </div>
                        </form>
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