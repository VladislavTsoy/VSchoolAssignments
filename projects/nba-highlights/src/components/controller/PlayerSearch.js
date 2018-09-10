import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'
import PlayerItem from '../view/PlayerItem'
let displayPlayer

class PlayerSearch extends Component {
    constructor() {
        super()
        this.state = {
            term: '',
            toggle: false,
            playerFound: null
        }
    }

    handleChange(term) {
        this.setState({term})
    }

    handleSubmit = e => {
        e.preventDefault()
        let foundPlayer = this.props.playersArr.filter(player => player.fullname.toLowerCase() == this.state.term.toLowerCase())
        if(foundPlayer[0]) {
            this.setState({playerFound: foundPlayer[0], toggle: true})
            console.log(foundPlayer[0])
            displayPlayer = (<Link to={`/players/${foundPlayer[0]._id}`} key={foundPlayer[0]._id}><PlayerItem playerObj={ foundPlayer[0] } /></Link>)
        } else {
            alert('Player not found.')
        }
        
    }

    render() {
        return (
            <div className="search-bar-container">
                <form>
                    <input type={this.state.term} onChange={event => this.handleChange(event.target.value)} placeholder="search player"/>
                    <Button onClick={this.handleSubmit}><SearchIcon /></Button>
                </form>
                {this.state.toggle
                ?
                <div>
                    {displayPlayer}
                </div>
                :<Fragment />
            }
            </div>
        );
    }
}

export default connect(state=>state, {})(PlayerSearch)