export default function StatsDashboard({ applications }){
    const total = applications.length

    const stats = applications.reduce(
        (acc,app) => {
            acc[app.status] = (acc[app.status] || 0) + 1
            return acc
        },
        {}
    )

    return (
        <div style={{ margin: "20px 0", padding: "15px", border: "1px solid #ccc"}}>
            <h3>Application Stats</h3>
            <p>Total: {total}</p>

            <ul>
                {Object.entries(stats).map(([status, count]) => (
                    <li key={status}>
                        {status}: {count}
                    </li>               
                ))}
            </ul>
        </div>
    )
}