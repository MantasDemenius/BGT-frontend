import Role from '../../helper/Role';

export default [
  {
    text: 'Add game',
    path: '/games/add',
    allowedRoles: [Role.Admin],
    linkId: 'add-game-link',
  },
  {
    text: 'Basic user link',
    path: '/',
    allowedRoles: [],
    linkId: 'add-game-link',
  },
];
