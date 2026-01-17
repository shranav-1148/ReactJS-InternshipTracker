export default function FilterBar({ filters, setFilters }){
    return (
        <div style={{ margin: "20px 0", display: "flex", gap: "10px" }}>
            <input
                placeholder="Search Company or role"
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />

            <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            >

                <option value="All">All Statuses</option>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
            </select>
        </div>
    )
}