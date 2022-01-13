import { Button } from '@mui/material'
import PlantsHeader from 'components/plants/PlantsHeader'
import PlantTable from 'components/plants/PlantTable'
import React from 'react'
import { Link } from 'react-router-dom'
import "styles/Plants.css"

function Plants() {

  return (
		<div className="plant__management">
      <PlantsHeader />
      <h3 className="header__name">Plant Management</h3>
			<PlantTable />
			<div className="header__button blue__button new">
				<Link to="plants/create">
					<Button className="newbtn" variant="contained">Add New Plant</Button>
				</Link>
			</div>
    </div>
  )
}

export default Plants
