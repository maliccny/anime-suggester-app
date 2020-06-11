
const button = document.querySelector('button');

async function getAnime() {

  removeInfo()
  const sectionInfo = document.querySelector('#section-info');
  let id = Math.ceil(Math.random() * Math.floor(100));
  let animeObj = await axios.get(`https://kitsu.io/api/edge/anime/${id}`);

  console.log(`ID: ${animeObj.data.data.id}`);
  console.log(`Title: ${animeObj.data.data.attributes.canonicalTitle}`);
  console.log(`Start-Date: ${animeObj.data.data.attributes.startDate}`);
  console.log(`Episode Count: ${animeObj.data.data.attributes.episodeCount}`);
  console.log(`Type Of Show: ${animeObj.data.data.attributes.showType}`);
  console.log(`Episode Length: ${animeObj.data.data.attributes.episodeLength}`);
  console.log(`Rating: ${animeObj.data.data.attributes.ageRatingGuide}`);
  console.log(`Status: ${animeObj.data.data.attributes.status}`);
  console.log(`Summary: ${animeObj.data.data.attributes.synopsis}`);

  sectionInfo.innerHTML += 
    `<div>
      <img src=${animeObj.data.data.attributes.posterImage.original}>
    </div>`;

  sectionInfo.innerHTML +=
    `<div>
      <ul>
        <li>Title: ${animeObj.data.data.attributes.canonicalTitle}</li>
        <li>Start-Date: ${animeObj.data.data.attributes.startDate}</li>
        <li>Episode Count: ${animeObj.data.data.attributes.episodeCount}</li>
        <li>Type Of Show: ${animeObj.data.data.attributes.showType}</li>
        <li>Episode Length: ${animeObj.data.data.attributes.episodeLength}</li>
        <li>Rating: ${animeObj.data.data.attributes.ageRatingGuide}</li>
        <li>Status: ${animeObj.data.data.attributes.status}</li>
      </ul>
      <p>Summary: ${animeObj.data.data.attributes.synopsis}</p>
    </div>`;
  
  // sectionInfo.innerHTML += `<p>Summary: ${animeObj.data.data.attributes.synopsis}</p>`;
  
}

function removeInfo() {
  const oldSection = document.querySelector('#section-info')
  while (oldSection.lastChild) {
    oldSection.removeChild(oldSection.lastChild)
  }
}


button.addEventListener('click', getAnime)
