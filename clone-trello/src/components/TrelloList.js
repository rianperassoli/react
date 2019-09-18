import React from 'react';
import TrelloCard from './TrelloCard'

const TrelloList = ({title}) => (
    <div style={styles.container}>

        <h4>{title}</h4>
        <TrelloCard />

    </div>
)

const styles = {
    container:{
        backgroundColor: '#CCC',
        borderRadius: 3,
        width: 300,
        padding: 8
    }
}

export default TrelloList;