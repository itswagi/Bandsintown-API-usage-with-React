
const app_id = 'string';
const url = 'https://cors-anywhere.herokuapp.com/https://rest.bandsintown.com/artists/';

export const Api = {
  async search(artist){
    return await fetch(`${url}${artist}?app_id=${app_id}`, )
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
        try{
          return jsonResponse.map(artist => ({
            id: artist.id,
            name: artist.name,
            image_url: artist.thumb_url,
            facebook: artist.facebook_page_url
          }))
        }catch(error){
          return {
            id: jsonResponse.id,
            name: jsonResponse.name,
            image_url: jsonResponse.thumb_url,
            facebook: jsonResponse.facebook_page_url
          }
        }
    }).catch(error => {
      return {
        id: null,
      }
    })
  }
}

export const EventApi = {
  async search(artist){
    return await fetch(`${url}${artist}/events?app_id=${app_id}`)
      .then(response => {
        try{
          if(response.ok){
            return response.json();
          }else if(response.status === 404){
            return Promise.reject('error 404')
          }
        }catch(error){
          console.log(error)
        }
      })
      .then(jsonResponse => {
        try{
          return jsonResponse.map( event => (
            {
              id: event.id,
              venue: event.venue.name,
              city: event.venue.city,
              country: event.venue.country,
              date: event.datetime,
            }
          ))
        }catch(error){
          return {
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
