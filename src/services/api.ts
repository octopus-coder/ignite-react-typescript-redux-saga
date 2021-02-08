const base_url = 'https://api.rawg.io/api/';

const padZero = (x: number) => {
  return x < 10 ? `0${x}` : x;
};

const current_year = new Date().getFullYear();
const current_month = padZero(new Date().getMonth() + 1);
const current_day = padZero(new Date().getDate());

const current_date = `${current_year}-${current_month}-${current_day}`;
const last_year = `${current_year - 1}-${current_month}-${current_day}`;
const next_year = `${current_year + 1}-${current_month}-${current_day}`;

const popular_games = `games?dates=${last_year},${current_date}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${current_date},${next_year}&ordering=-added&page_size=10`;
const new_games = `games?dates=${last_year},${current_date}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

export const gameDetailsURL = (game_id: number) =>
  `${base_url}games/${game_id}`;

export const gameScreenshotURL = (game_id: number) =>
  `${base_url}games/${game_id}/screenshots`;

export const searchGameURL = (game_name: string) =>
  `${base_url}games?search=${game_name}&page_size=9`;
