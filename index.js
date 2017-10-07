if (!process.env.REDIRECT_URL) throw new Error('Please provide the REDIRECT_URL environment variable. See https://github.com/withspectrum/micro-redirect for more information.')

module.exports = async (req, res) => {
  res.statusCode = 301;
  res.setHeader('Location', process.env.REDIRECT_URL);
  res.end();
}
