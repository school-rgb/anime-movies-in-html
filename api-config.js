/**
 * Anime Stream API Configuration
 * Multiple server and embed options for movies and TV shows
 */

export const STREAMING_SERVERS = [
  {
    name: 'VidLink',
    url: (id, s, e, isMovie) => isMovie ? `https://vidlink.pro/movie/${id}` : `https://vidlink.pro/tv/${id}/${s}/${e}`
  },
  {
    name: 'Viduki API 1 (Multi Server)',
    url: (id, s, e, isMovie, color = 'ff6600') => isMovie ? `https://viduki.net/1/movie/${id}?color=${color}` : `https://viduki.net/1/tv/${id}/${s}/${e}?color=${color}`
  },
  {
    name: 'Viduki API 2 (Multi Language)',
    url: (id, s, e, isMovie, color = 'ff6600') => isMovie ? `https://viduki.net/2/movie/${id}?color=${color}` : `https://viduki.net/2/tv/${id}/${s}/${e}?color=${color}`
  },
  {
    name: 'Viduki API 3 (Multi Embeds)',
    url: (id, s, e, isMovie, color = 'ff6600') => isMovie ? `https://viduki.net/3/movie/${id}?color=${color}` : `https://viduki.net/3/tv/${id}/${s}/${e}?color=${color}`
  },
  {
    name: 'Viduki API 4 (Premium)',
    url: (id, s, e, isMovie, color = 'ff6600') => isMovie ? `https://viduki.net/4/movie/${id}?color=${color}` : `https://viduki.net/4/tv/${id}/${s}/${e}?color=${color}`
  },
];

/**
 * Get stream URL for a specific server
 * @param {number} serverIndex - Index of the server in STREAMING_SERVERS array
 * @param {string} id - Movie/TV ID (TMDB or IMDB)
 * @param {number} season - Season number (for TV only)
 * @param {number} episode - Episode number (for TV only)
 * @param {boolean} isMovie - True for movies, false for TV
 * @param {string} color - Hex color code (optional, defaults to 'ff6600')
 * @returns {string} - Complete URL for streaming
 */
export const getStreamUrl = (serverIndex, id, season, episode, isMovie, color = 'ff6600') => {
  if (serverIndex < 0 || serverIndex >= STREAMING_SERVERS.length) {
    console.error('Invalid server index');
    return null;
  }
  
  return STREAMING_SERVERS[serverIndex].url(id, season, episode, isMovie, color);
};

/**
 * Get a specific server by name
 * @param {string} serverName - Name of the server
 * @returns {object} - Server object or null if not found
 */
export const getServerByName = (serverName) => {
  return STREAMING_SERVERS.find(server => server.name === serverName) || null;
};

export default STREAMING_SERVERS;
