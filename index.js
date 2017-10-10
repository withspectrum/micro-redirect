if (!process.env.REDIRECT_URL) throw new Error('Please provide the REDIRECT_URL environment variable. See https://github.com/withspectrum/micro-redirect for more information.')
const { URL } = require('url');

module.exports = async (req, res) => {
  res.statusCode = 301;
  const url = new URL(req.url, process.env.REDIRECT_URL);
  res.setHeader('Location', `${process.env.REDIRECT_URL}${url.pathname ? url.pathname : ''}${url.search ? url.search : ''}${url.hash ? url.hash : ''}`);
  res.end();
}
