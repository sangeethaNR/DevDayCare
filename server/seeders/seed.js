const db = require('../config/connection');
const { User,Profile } = require('../models');
const userSeeds = require('./userSeeds.json');
const profileSeeds = require('./profileSeeds.json');

db.once('open', async () => {
  await Profile.deleteMany({});
  await User.deleteMany({});

  await User.create(userSeeds);
  await Profile.create(profileSeeds);

  console.log('all done!');
  process.exit(0);
});
