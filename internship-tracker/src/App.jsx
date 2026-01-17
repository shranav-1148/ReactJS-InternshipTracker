import { useState, useEffect } from 'react'
import ApplicationForm from './components/ApplicationForm'
import ApplicationList from './components/ApplicationList'
import FilterBar from './components/FilterBar'
import StatsDashboard from './components/StatsDashboard'


function App() {
  const [applications, setApplications] = useState([])
  const [filters, setFilters] = useState({
    search: "",
    status: "All"
  })

  // useEffect to save and load applications
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("applications"))
    if (saved) setApplications(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(applications))
  }, [applications])

  function addApplications(app){
    setApplications(prev => [...prev, app])
  }

  // Filtering applications based on status and search terms
  const filteredApplications = applications.filter(app => {
    if (!app) return false
    
    const matchesSearch = 
      app.company.toLowerCase().includes(filters.search.toLowerCase()) ||
      app.role.toLowerCase().includes(filters.search.toLowerCase())

    const matchesStatus =
      filters.status === "All" || app.status === filters.status

    return matchesSearch && matchesStatus
  })


  return (
    <div style={{ maxWidth: "700px", margin : "auto", padding: "20px"}}>
      <h1>Internship Application Tracker</h1>
      
      <ApplicationForm onAdd={addApplications} />

      <FilterBar filters={filters} setFilters={setFilters} />

      <StatsDashboard applications={filteredApplications} />

      <ApplicationList applications={filteredApplications}/>
    </div>
  )
}

export default App
