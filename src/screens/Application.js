import ApplicationHeader from 'components/application/ApplicationHeader'
import ApplicationForm from 'components/application/ApplicationForm'
import "styles/Application.css"
import React from 'react'
import FactoryManagement from 'components/application/factoryManagement/FactoryManagement'

function CreateApplication() {
  return (
    <div>
      <ApplicationHeader />
      <ApplicationForm />
      <FactoryManagement />
    </div>
  )
}

export default CreateApplication
