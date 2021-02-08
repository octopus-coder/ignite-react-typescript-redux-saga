import { useLocation } from 'react-router-dom';

export const useGetGameIDFromLocation = () => {
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  const game_id = id ? parseInt(id) : undefined;
  return [game_id];
};
