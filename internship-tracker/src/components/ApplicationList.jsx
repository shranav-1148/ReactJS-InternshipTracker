import ApplicationCard from "./ApplicationCard";

export default function ApplicationList({ applications }){
    if (applications.length === 0) {
        return <p>No Applications yet.</p>
    }

    return (

        <div>
            {applications.map(app => (
                <ApplicationCard key ={app.id} app={app} />
            ))}
        </div>
    )
}