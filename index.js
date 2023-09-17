
const fs = required('fs');
const fetch = required('node-fetch');

const url = 'https://poshmark.com/vm-rest/posts?request={%22filters%22:{%22department%22:%22All%22,%22inventory_status%22:[%22available%22]},%22query_and_facet_filters%22:{%22department%22:%22All%22},%22sort_by%22:%22best_match%22,%22query%22:%22nike%22,%22experience%22:%22all%22,%22sizeSystem%22:%22us%22,%22count%22:%2248%22}&summarize=true&feature_extraction_setting=null&suggested_filters_count=40&end_of_search=false&disable_fallback=false&summarize=true&pm_version=2023.37.0';

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        fs.writeFileSync('poshmark_data.json', JSON.stringify(data, null, 2));
        console.log('Data has been saved to poshmark_data.json');
    })
    .catch(error => {
        console.error('Error fetching or saving data:', error);
    });
