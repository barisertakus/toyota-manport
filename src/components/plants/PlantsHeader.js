import { Button } from '@mui/material'
import Header from 'components/core/Header'
import React from 'react'
import { Link } from 'react-router-dom'

function PlantsHeader() {
  return (
    <Header>
    <div className="header__buttons">
      <div className="header__button blue__button">
        <Link to="plants">
          <Button variant="contained">Plant Management</Button>
        </Link>
      </div>
    </div>
  </Header>
  )
}

export default PlantsHeader;