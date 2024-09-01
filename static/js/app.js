// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;
    console.log(metadata);

   
  
    // Use d3 to select the panel with id of `#sample-metadata`
    let PANEL=d3.select("#sample-metadata")

    // Use `.html("") to clear any existing metadata
    PANEL.html("")
    
  

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    
    const filteredMetadata = Object.entries(metadata).filter(([key, value]) => typeof value === 'obeject');
    filteredMetadata.forEach(([key, value]) => {
      PANEL.append("p")
          .text(`${key}: ${value}`);
  });
    console.log(filteredMetadata);
    });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples=data.samples;
    console.log(samples);

    // Filter the samples for the object with the desired sample number
   
    const sortedItems = samples.sort((a, b) => b.sample_values - a.sample_values);
    
    const top10Items = sortedItems.slice(0, 10);
    
    console.log(top10Items);
  
    // Get the otu_ids, otu_labels, and sample_values
    function otuids(){
      return top10Items.otu_ids;
    };
    function otulabels(){
      return top10Items.otu_labels;
    };
    function sampleValues(){
      return top10Items.sample_values;
    }

    // Build a Bubble Chart


    // Render the Bubble Chart


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
     let test = data.metadata;
     let samples=data.samples;
     buildMetadata(test);
     buildCharts(samples);
    // Get the names field


    // Use d3 to select the dropdown with id of `#selDataset`


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list


    // Build charts and metadata panel with the first sample

  });
}

// Function for event listener
function optionChanged(newSample) { 
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
}

// Initialise the dashboard
init();
