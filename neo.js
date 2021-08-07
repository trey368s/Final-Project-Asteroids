function NearEarthObject(){
    const api_key = "lgQAxBXsZc0T38cddFHoBb3FMW6R8hxs8HQmjxwS";
    var today = new Date();
    var date = today.getFullYear() + '-' + ('0'+ (today.getMonth()+1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + date + "&api_key=" + api_key)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const name = data.near_earth_objects[date][0].name;
        document.getElementById("name").innerHTML = "Name: " + name;
        const close_approach_date = data.near_earth_objects[date][0].close_approach_data[0].close_approach_date;
        document.getElementById("approach_date").innerHTML = "Approach Date: " + close_approach_date;
        const miss_distance = data.near_earth_objects[date][0].close_approach_data[0].miss_distance.kilometers;
        document.getElementById("miss_distance").innerHTML = "Miss Distance: " + miss_distance + " km";
        const relative_velocity = data.near_earth_objects[date][0].close_approach_data[0].relative_velocity.kilometers_per_hour;
        document.getElementById("relative_velocity").innerHTML = "Relative Velocity: " + relative_velocity + " km/h";
        const estimated_diameter_max = data.near_earth_objects[date][0].estimated_diameter.kilometers.estimated_diameter_max;
        document.getElementById("estimated_max_diameter").innerHTML = "Estimated Max Diameter: " + estimated_diameter_max + " km";
        const estimated_diameter_min = data.near_earth_objects[date][0].estimated_diameter.kilometers.estimated_diameter_min;
        document.getElementById("estimated_min_diameter").innerHTML = "Estimated Min Diameter: " + estimated_diameter_min + " km";
        const potentially_hazardous = (data.near_earth_objects[date][0].is_potentially_hazardous_asteroid).toString();
        document.getElementById("potentially_hazardous").innerHTML = "Potentially Hazardous: " + potentially_hazardous.capitalize();
        console.log(name, close_approach_date, miss_distance, relative_velocity, estimated_diameter_max, estimated_diameter_min, potentially_hazardous)
      })
}
NearEarthObject();