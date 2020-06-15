# Project Overview

## anime-suggester-app

https://maliccny.github.io/anime-suggester-app/

## Project Description

An App offering suggestions for Anime to watch, gives different choices of Anime and a brief description of the anime as well as key details that may he helpful to the user to make a choice. 

## API and Data Sample

[Kitsu Anime API](https://kitsu.docs.apiary.io/reference/anime)

### API Data Sample

```JSON
{
  "data": {
    "id": "1",
    "type": "anime",
    "links": {
      "self": "https://kitsu.io/api/edge/anime/1"
    },
    "attributes": {
      "createdAt": "2013-02-20T16:00:13.609Z",
      "updatedAt": "2017-12-20T00:00:09.270Z",
      "slug": "cowboy-bebop",
      "synopsis": "In the year 2071, humanity has colonoized several of the planets and moons...",
      "coverImageTopOffset": 400,
      "titles": {
        "en": "Cowboy Bebop",
        "en_jp": "Cowbop Bebop",
        "ja_jp": "カウボーイビバップ"
      },
      "canonicalTitle": "Cowboy Bebop",
      "abbreviatedTitles": [
        "COWBOY BEBOP"
      ]
        }

```

## Wireframes

https://wireframe.cc/uh7vhb 


#### MVP 

- Display title and synopsis of anime
- fetching an image of the anime
- Display the review score of the anime
- a button that randomly selects an anime choice. 
- an event listener which changes what is displayed on the page 




#### PostMVP 

- add a second API that fetches the opening theme song of the anime
- a third API that fetches animations of the anime
- input box for manually searching for a specific anime



## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Prompt; approval | complete
|June 9| HTML skeleton, pseudocode for API | complete
|June 10| implement API code | complete
|June 11| CSS, Initial Clickable Model | complete
|June 12| PostMVP | complete
|June 15| Present | Incomplete


## Priority Matrix

![Priority Matrix](https://i.imgur.com/ohFEEw0.jpg)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Structure | M | 1hr|  1hr | 1hr |
| Basic CSS Styles | M | 3hrs| 4hrs | 4hrs |
| buttons | M | 2hrs | 1hr | 1hr |
| API to Display title and synopsis for other information | H | 4hrs | 3hrs | 3hrs |
| API to display opening theme song | H | 4hrs | 5hrs | 5hrs |
| Additional Styling Effects | L | 2hrs | 2hrs | 2hrs |
| Total | H | 20hrs| 20hrs | 20hrs |


## Code Snippet

**JS**

```
async function getAnime() {

  removeInfo()
  const sectionInfo = document.querySelector('#section-info');
  let videoTag = document.querySelector('iframe')
  let id = Math.ceil(Math.random() * Math.floor(100));
  let animeObj = await axios.get(`https://kitsu.io/api/edge/anime/${id}`);
  let titleOpen = `${animeObj.data.data.attributes.canonicalTitle} Opening`
  console.log(titleOpen)
  let vidObj = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${titleOpen}&key=AIzaSyCdNw0Cahn4NwywdgWzL802Nwnk3UTUWxY`);
  let videoCode = vidObj.data.items[0].id.videoId;
  console.log(videoCode);

  //printing of info in console, testing purposes

  console.log(`ID: ${animeObj.data.data.id}`);
  console.log(`Title: ${animeObj.data.data.attributes.canonicalTitle}`);
  console.log(`Start-Date: ${animeObj.data.data.attributes.startDate}`);
  console.log(`Episode Count: ${animeObj.data.data.attributes.episodeCount}`);
  console.log(`Type Of Show: ${animeObj.data.data.attributes.showType}`);
  console.log(`Episode Length: ${animeObj.data.data.attributes.episodeLength}`);
  console.log(`Rating: ${animeObj.data.data.attributes.ageRatingGuide}`);
  console.log(`Status: ${animeObj.data.data.attributes.status}`);
  console.log(`Summary: ${animeObj.data.data.attributes.synopsis}`);

  //inserting image of anime to DOM

  sectionInfo.innerHTML += 
    `<div>
      <img src=${animeObj.data.data.attributes.posterImage.original}>
    </div>`;

  // inferting of anime info
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
  

  // youtube functionality
  
  console.log(videoTag)
  console.log(videoTag.src)
  videoTag.src = `https://www.youtube.com/embed/${videoCode}?autoplay=1`
  console.log(videoTag.src)
  
} 
```

## Change Log

scrapped idea for 3rd api
