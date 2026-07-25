/**
 * Anime Stream API Configuration
 * Multiple server and embed options for movies and TV shows
 */

export const STREAMING_APIS = {
  // API 1: Movie (Multi Server)
  MOVIE_MULTI_SERVER: (id, color = 'ff6600') => 
    `https://viduki.net/1/movie/${id}?color=${color}`,
  
  // API 1: TV (Multi Server)
  TV_MULTI_SERVER: (id, season, episode, color = 'ff6600') => 
    `https://viduki.net/1/tv/${id}/${season}/${episode}?color=${color}`,
  
  // API 2: Movie (Multi Language)
  MOVIE_MULTI_LANGUAGE: (id, color = 'ff6600') => 
    `https://viduki.net/2/movie/${id}?color=${color}`,
  
  // API 2: TV (Multi Language)
  TV_MULTI_LANGUAGE: (id, season, episode, color = 'ff6600') => 
    `https://viduki.net/2/tv/${id}/${season}/${episode}?color=${color}`,
  
  // API 3: Movie (Multi Embeds)
  MOVIE_MULTI_EMBEDS: (id, color = 'ff6600') => 
    `https://viduki.net/3/movie/${id}?color=${color}`,
  
  // API 3: TV (Multi Embeds)
  TV_MULTI_EMBEDS: (id, season, episode, color = 'ff6600') => 
    `https://viduki.net/3/tv/${id}/${season}/${episode}?color=${color}`,
  
  // API 4: Movie (Premium)
  MOVIE_PREMIUM: (id, color = 'ff6600') => 
    `https://viduki.net/4/movie/${id}?color=${color}`,
  
  // API 4: TV (Premium)
  TV_PREMIUM: (id, season, episode, color = 'ff6600') => 
    `https://viduki.net/4/tv/${id}/${season}/${episode}?color=${color}`,
};

/**
 * API Helper Functions
 */
export const getMovieUrl = (api, id, color = 'ff6600') => {
  const movieApis = {
    'multi-server': STREAMING_APIS.MOVIE_MULTI_SERVER,
    'multi-language': STREAMING_APIS.MOVIE_MULTI_LANGUAGE,
    'multi-embeds': STREAMING_APIS.MOVIE_MULTI_EMBEDS,
    'premium': STREAMING_APIS.MOVIE_PREMIUM,
  };
  
  return movieApis[api] ? movieApis[api](id, color) : null;
};

export const getTvUrl = (api, id, season, episode, color = 'ff6600') => {
  const tvApis = {
    'multi-server': STREAMING_APIS.TV_MULTI_SERVER,
    'multi-language': STREAMING_APIS.TV_MULTI_LANGUAGE,
    'multi-embeds': STREAMING_APIS.TV_MULTI_EMBEDS,
    'premium': STREAMING_APIS.TV_PREMIUM,
  };
  
  return tvApis[api] ? tvApis[api](id, season, episode, color) : null;
};

export default STREAMING_APIS;
