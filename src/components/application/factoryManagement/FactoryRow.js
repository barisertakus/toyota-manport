import { Checkbox, Switch } from '@mui/material'
import React from 'react'

function FactoryRow({name, checkState, switchState}) {
  return (
    <div className='country__row'>
      <div className="row__alive">
				<Checkbox
					name={name}
					checked={checkState}
				/>
				<h3>{name}</h3>
			</div>

			<div className="row__track">
				<Switch
					name={name}
					checked={switchState}
					className="table__switch"
				/>
			</div>
    </div>
  )
}

export default FactoryRow
