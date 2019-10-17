const Common = {
    BASE_URI: "https://api.spacexdata.com/v3",
    LAUNCHES: "launches?filter=flight_number,details,rocket/rocket_id,mission_name",
    ROCKETS: "rockets",
    ROCKET_FILTER: "?filter=id,cost_per_launch,description"
};

export default Common;