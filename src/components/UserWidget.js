import React, { PropTypes } from 'react'
import { Card, CardText, CardTitle } from 'material-ui/Card'
import Gauge from './Gauge'

const UserWidget = ({user: {name, currentBudget, maxBudget}}) => {
  return (
    <Card className='dashboard'>
      <CardTitle title={name} />
      <CardText>
        {
          maxBudget > 0 &&
          <Gauge value={currentBudget} max={maxBudget} />

        }
        {
          maxBudget > 0 &&
          <small>{currentBudget}€ dépensés sur {maxBudget}€ max</small>
        }
        {
          maxBudget <= 0 &&
          <small>{currentBudget}€ dépensés</small>
        }
      </CardText>
    </Card>
  )
}

UserWidget.propTypes = {
  user: PropTypes.isRequired
}

export default UserWidget
