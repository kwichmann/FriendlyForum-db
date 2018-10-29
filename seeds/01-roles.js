
exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  await knex('role').del();
  // Make sure any new roles start from id 4
  await knex.raw('ALTER SEQUENCE role_id_seq restart with 3;');
  // Three standard roles
  return knex('role').insert([
    {id: 1, name: 'Friendly contributor'},
    {id: 2, name: 'Friendly moderator'},
    {id: 3, name: 'Friendly admin'}
  ]);
};
