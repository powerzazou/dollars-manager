import React, { PropTypes } from 'react'
import { Card, CardText, CardTitle, CardActions } from 'material-ui/Card'
import Gauge from './Gauge'
import RaisedButton from 'material-ui/RaisedButton'
import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart'
import { Link } from 'react-router'

const UserWidget = ({user: {id, name, currentBudget, maxBudget}}) => {
  const link = <Link to={'/expenses/' + id} />
  return (
    <Card className='dashboard'>
      <CardTitle title={name} />
      <CardText>
        {
          maxBudget > 0 && <Gauge value={currentBudget} max={maxBudget} />
        }
        {
          maxBudget > 0 && <small>{currentBudget}€ dépensés sur {maxBudget}€ max</small>
        }
        {
          maxBudget <= 0 && <small>{currentBudget}€ dépensés</small>
        }
      </CardText>
      <CardActions>
        <RaisedButton label='Détails des dépenses'
          icon={<ShoppingCartIcon />} containerElement={link}
        />

      </CardActions>
    </Card>
  )
}

/* UserWidget.propTypes = {
  user: PropTypes.isRequired
} */

export default UserWidget
