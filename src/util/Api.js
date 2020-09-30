
const app_id = 'string';
const url = 'https://cors-anywhere.herokuapp.com/https://rest.bandsintown.com/artists/';

export const Api = {
  search(artist){
    return fetch(`${url}${artist}?app_id=${app_id}`, )
    .then(response => {
      try{
        if(response.ok){
          return response.json();
        }
      }catch(error){
        console.log(error)
      }
    })
    .then(jsonResponse => {
      console.log(jsonResponse);
      if(jsonResponse.id){
        return {
          id: jsonResponse.id,
          name: jsonResponse.name,
          image_url: jsonResponse.thumb_url,
          facebook: jsonResponse.facebook_page_url
        }
      }
    })
  }
}

export const EventApi = {
  search(artist){
    return fetch(`${url}${artist}/events?app_id=${app_id}`)
      .then(response => {
        try{
          if(response.ok){
            return response.json();
          }
        }catch(error){
          console.log(error)
        }
      })
      .then(jsonResponse => {
          return jsonResponse.map( event => (
            {
              venue: event.venue.name,
              city: event.venue.city,
              country: event.venue.country,
              date: event.datetime,
            }
          ))
        }
      )
    }
}
