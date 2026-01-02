export default function FilterBar({ setFilter, setSortBy }) {
    return (
        <div className="filter-bar">
            <div className="filter-group">
                <span className="label">Filter</span>
                <select onChange={e => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="high">High Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="low">Low Priority</option>
                </select>
            </div>

            <div className="filter-group">
                <span className="label">Sort By</span>
                <select onChange={e => setSortBy(e.target.value)}>
                    <option value="created">Created</option>
                    <option value="date">Due Date</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
        </div>

    );
}