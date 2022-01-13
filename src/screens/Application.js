import ApplicationHeader from 'components/application/ApplicationHeader'
import ApplicationForm from 'components/application/ApplicationForm'
import "styles/Application.css"
import React from 'react'

function CreateApplication() {
  return (
    <div>
      <ApplicationHeader />
      <ApplicationForm />
    </div>
  )
}

export default CreateApplication
