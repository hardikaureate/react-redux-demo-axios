import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyIceCream}>Buy Cake</button>
        </div>
    )
}

const mapStateTOProps = state => {
    return{
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateTOProps, mapDispatchToProps)(CakeContainer)
