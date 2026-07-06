const SearchFilterBar = ({
    searchTerm,
    onSearchChange,
    statusFilter,
    onStatusFilterChange,
    sortOption,
    onSortChange,
    totalApplications,
    filteredApplicationsCount
}) => {

    const hasActiveFilters =
        searchTerm !== "" ||
        statusFilter !== "All" ||
        sortOption !== "Newest";

    const clearFilters = () => {

        onSearchChange("");
        onStatusFilterChange("All");
        onSortChange("Newest");

    };

    return (

        <div className="sticky top-4 z-10 mt-8 rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-xl backdrop-blur">

            <div className="grid gap-4 lg:grid-cols-3">

                <input
                    type="text"
                    placeholder="🔍 Search companies or roles..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                />

                <select
                    value={statusFilter}
                    onChange={(e) => onStatusFilterChange(e.target.value)}
                    className="rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                >

                    <option value="All">
                        All Status
                    </option>

                    <option value="Applied">
                        Applied
                    </option>

                    <option value="Interview">
                        Interview
                    </option>

                    <option value="Rejected">
                        Rejected
                    </option>

                </select>

                <select
                    value={sortOption}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                >

                    <option value="Newest">
                        Newest First
                    </option>

                    <option value="Oldest">
                        Oldest First
                    </option>

                    <option value="CompanyAZ">
                        Company A-Z
                    </option>

                    <option value="CompanyZA">
                        Company Z-A
                    </option>

                </select>

            </div>

            <div className="mt-5 flex flex-col items-center justify-between gap-3 text-sm text-slate-400 md:flex-row">

                <p>

                    Showing

                    <span className="mx-1 font-semibold text-white">

                        {filteredApplicationsCount}

                    </span>

                    of

                    <span className="mx-1 font-semibold text-white">

                        {totalApplications}

                    </span>

                    applications

                </p>

                {
                    hasActiveFilters && (

                        <button
                            onClick={clearFilters}
                            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
                        >

                            Clear Filters

                        </button>

                    )
                }

            </div>

        </div>

    );

};

export default SearchFilterBar;