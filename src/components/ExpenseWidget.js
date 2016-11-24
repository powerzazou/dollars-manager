import React, { PropTypes } from 'react'
import { Card, CardText, CardTitle, CardActions } from 'material-ui/Card'
import Gauge from './Gauge'
import RaisedButton from 'material-ui/RaisedButton'
import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart'
import { Link } from 'react-router'
import {formatDate, formatPrice} from '../lib/helpers'

const ExpenseWidget = ({expense: {id, label, details, price, dateTime}}) => {
  // const link = <Link to={'/expenses/' + id} />
  return (
    <Card className='dashboard'>
      <CardTitle title={label} subtitle={dateTime} actAsExpander={true} showExpandableButton={true}/>
      <CardText>
        <h1>{formatPrice(price)}</h1>
        <p>{details}</p>
      </CardText>
      <CardActions expandable={true}>
        <RaisedButton label='Supprimer'
          icon={<ShoppingCartIcon />}
        />
      </CardActions>
    </Card>
  )
}

ExpenseWidget.propTypes = {
  expense: PropTypes.object.isRequired
}

export default ExpenseWidget
