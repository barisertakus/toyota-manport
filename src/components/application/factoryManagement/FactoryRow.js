import { Checkbox, Switch } from '@mui/material'
import React from 'react'

function FactoryRow({plant, handleChange, disabled}) {

	const {country, alive, track} = plant;

  return (
    <div className='country__row'>
      <div className="row__alive">
				<Checkbox
					name={country}
					checked={alive}
					onChange={(e)=>handleChange(e,"alive")}
					disabled={disabled}
				/>
				<h3>{country}</h3>
			</div>

			<div className="row__track">
				<Switch className="table__switch"
					name={country}
					checked={track}
					onChange={(e)=>handleChange(e,"track")}
					disabled={disabled || !alive}
				/>
			</div>
    </div>
  )
}

export default FactoryRow
