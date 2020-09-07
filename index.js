const googleDb = ['11', '12', '123', '1234'];

const searchGoogle = (search, db) => {
  const matches = db.filter(site => site.includes(search));
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// searchGoogle('1',db);

module.exports = searchGoogle;
