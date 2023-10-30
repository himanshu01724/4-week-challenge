// Sample data
const data = [
    { name: "A", value: 1070 },
    { name: "B", value: 800 },
    { name: "C", value: 1500 },
    { name: "D", value: 600  },
    { name: "E", value: 900},
    { name: "F", value: 1200},
    { name: "G", value: 400}
];

// SVG dimensions
const width = 500;
const height = 300;

const colorScale = d3.scaleOrdinal()
    .domain(data.map(d => d.name))
    .range(["#1f77b4"]); // You can customize the colors


const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

const xScale = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([0, width])
    .padding(0.1);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([height, 0]);

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);


svg.append("g")
    .attr("class", "y-axis")
    .call(yAxis);

// Add numbers to the y-axis
svg.selectAll(".y-axis text")
    .attr("x", -5) // Adjust the position as needed
    .style("text-anchor", "end");
svg.append("g")
    .attr("class", "y-axis")
    .call(yAxis);

function updateChart(sortKey) {
    data.sort((a, b) => (sortKey === "value") ? b.value - a.value : a.name.localeCompare(b.name));

    xScale.domain(data.map(d => d.name));

    svg.select(".x-axis")
        .transition()
        .duration(1000)
        .call(xAxis);

    const bars = svg.selectAll(".bar")
        .data(data, d => d.name);

    bars.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.name))
        .attr("width", xScale.bandwidth())
        .attr("y", height)
        .attr("height", 0)
        .attr("fill", d => colorScale(d.name)) // Set the fill color
        .merge(bars)
        .transition()
        .duration(1000)
        .attr("x", d => xScale(d.name))
        .attr("width", xScale.bandwidth())
        .attr("y", d => yScale(d.value))
        .attr("height", d => height - yScale(d.value));

    // Add titles and values for each bar
    const titles = svg.selectAll(".title")
        .data(data, d => d.name);

    titles.enter()
        .append("text")
        .attr("class", "title")
        .attr("x", d => xScale(d.name) + xScale.bandwidth() / 2)
        .attr("y", height - 10) // Adjust the position as needed
        .attr("text-anchor", "middle")
        .text(d => d.name)
        .merge(titles)
        .transition()
        .duration(1000)
        .attr("x", d => xScale(d.name) + xScale.bandwidth() / 2);

    const values = svg.selectAll(".value")
        .data(data, d => d.name);

    values.enter()
        .append("text")
        .attr("class", "value")
        .attr("x", d => xScale(d.name) + xScale.bandwidth() / 2)
        .attr("y", d => yScale(d.value) - 5) // Adjust the position as needed
        .merge(values)
        .transition()
        .duration(1000)
        .attr("x", d => xScale(d.name) + xScale.bandwidth() / 2);

    bars.exit()
        .transition()
        .duration(1000)
        .attr("y", height)
        .attr("height", 0)
        .remove();
}


// Initial chart rendering
updateChart("name");

// Add event listener to the dropdown
d3.select("#sort").on("change", function() {
    const sortKey = this.value;
    updateChart(sortKey);
});
