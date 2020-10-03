//Url and app_id tp communicate with bandsintown api
const app_id = 'string';
const url = 'https://cors-anywhere.herokuapp.com/https://rest.bandsintown.com/artists/';

//Retreive artist information only using async await fetch prpmises
export const Api = {
  async search(artist){
    return await fetch(`${url}${artist}?app_id=${app_id}`, )  //sends request for artist information
    .then(response => { //on receiving response from api
      try{  //check for valid response
        if(response.ok){
          return response.json(); //convert response to a json response
        }
      }catch(error){  //catch any errors and log to console
        console.log(error)
      }
    })
    .then(jsonResponse => {
        try{ //returns only needed information from jsonResponse
          return jsonResponse.map(artist => ({  //if many artists were returned
            id: artist.id,
            name: artist.name,
            image_url: artist.thumb_url,
            facebook: artist.facebook_page_url
          }))
        }catch(error){
          return {  //if single artist was returned
            id: jsonResponse.id,
            name: jsonResponse.name,
            image_url: jsonResponse.thumb_url,
            facebook: jsonResponse.facebook_page_url
          }
        }
    }).catch(error => { //catch if artist doesn't exist in bandsintown's database
      return {
        id: null,
      }
    })
  }
}

//Separate call for artist's events
export const EventApi = {
  async search(artist){
    return await fetch(`${url}${artist}/events?app_id=${app_id}`) //send query to bandsintown
      .then(response => {
        try{  //check response
          if(response.ok){ //convert to json is response is valid
            return response.json();
          }else if(response.status === 404){
            return Promise.reject('error 404')
          }
        }catch(error){  //catch errors if bad response
          console.log(error)
        }
      })
      .then(jsonResponse => {
        try{  //only return needed event information from json data
          return jsonResponse.map( event => ( //if many events
            {
              id: event.id,
              venue: event.venue.name,
              city: event.venue.city,
              country: event.venue.country,
              date: event.datetime,
            }
          ))
        }catch(error){
          return {  //if only one event, map wont work, so separate code for that below
              id: jsonResponse.id,
              venue: jsonResponse.venue.name,
              city: jsonResponse.venue.city,
              country: jsonResponse.venue.country,
              date: jsonResponse.datetime,
            }
        }
        }
      ).catch( error => { return []})
    }
}
