import CreatePlantForm from 'components/createPlant/CreatePlantForm'
import CreatePlantHeader from 'components/createPlant/CreatePlantHeader'
import React from 'react'
import "styles/CreatePlant.css"

function CreatePlant() {
  return (
    <div>
      <CreatePlantHeader />
      <CreatePlantForm />
    </div>
  )
}

export default CreatePlant
