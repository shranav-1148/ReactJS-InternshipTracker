export default function ApplicationCard({ app }){
    const statusColors = {
        Applied : "#3498db",
        Interview : "#f1c40f",
        Offer : "#2ecc71",
        Rejected : "#e74c3c"

    }

    return (
        // Returning a div card with application details
        <div
            style = {{
                border: "1px solid #ddd",
                padding: "12px",
                marginBottom: "10px",
                // Apply color based on status
                borderLeft: `6px solid ${statusColors[app.status]}`,
                borderRadius: "6px"
            }}
        >
            <h3>{app.company}</h3>
            <p><strong>Role:</strong> {app.role}</p>
            <p><strong>Status:</strong> {app.status}</p>
            <p><strong>Applied:</strong> {app.dateApplied || "-"}</p>
            {/* If note exists create note paragraph */}
            {app.notes && <p><strong>Notes: </strong> {app.notes}</p>}
        </div>
    )
}