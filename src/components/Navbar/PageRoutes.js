import Role from '../../helper/Role';
import CreateGame from '../../pages/GamePage/CreateGame';

export default [
  {
    text: 'Add game',
    path: '/games/add',
    allowedRoles: [Role.Admin, Role.Creator],
    linkId: 'add-game-link',
    component: CreateGame,
  },
  {
    text: 'Add game1',
    path: '/games/add',
    allowedRoles: [Role.Admin, Role.Creator],
    linkId: 'add-game-link',
    component: CreateGame,
  },
  {
    text: 'Basic user link',
    path: '/',
    allowedRoles: [],
    linkId: 'add-game-link',
    component: CreateGame,
  },
];
