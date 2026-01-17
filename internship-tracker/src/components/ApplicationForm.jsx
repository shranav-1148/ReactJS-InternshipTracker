import { useState } from 'react';

export default function ApplicationForm({ onAdd }){
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('Applied');
    const [dateApplied, setDateApplied] = useState('');
    const [notes, setNotes] = useState('');

    // Overwrite handleSubmit so that form submit doesnt reload the page
    function handleSubmit(e){
        e.preventDefault();
        if (!company || !role) return

        const newApplication = {
            id: Date.now(),
            company,
            role,
            status,
            dateApplied,
            notes
        }

        onAdd(newApplication)

        setCompany("")
        setRole("")
        setNotes("")

    }

    return (
        <form onSubmit={handleSubmit}>
        {/* Form Layout */}
            <input
                placeholder='Company'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            <input 
                placeholder='Role'
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />

            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
            </select>

            <input
                type='date'
                value={dateApplied}
                onChange={(e) => setDateApplied(e.target.value)}
            />
            <textarea
                placeholder='Notes (optional)'
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />

            <button>Add Application</button>    
        </form>
    )
}