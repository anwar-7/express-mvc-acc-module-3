let count = 0;

const viewCount = (req, res, next) => {
  count++;
  console.log(count);
  //   res.send('view counted');
  next();
};

module.exports = viewCount;
