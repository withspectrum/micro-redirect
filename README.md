# `micro-redirect`

A tiny Node.js microservice to redirect users to a different location.

## Deployment

Your own `micro-redirect` is one click away:

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/withspectrum/micro-redirect&env=REDIRECT_URL)

You can also deploy with a single command from the terminal (assuming you have [`now`](https://now.sh) installed):

```sh
now -e REDIRECT_URL=mypage.com withspectrum/micro-redirect
```

## Usage

Set the `REDIRECT_URL` environment variable to the page you want to redirect to, then send your users to your `micro-redirect` instance.

For example:

```sh
now -e REDIRECT_URL=home.com withspectrum/micro-redirect
```

```HTML
<a href="mymicroredirect.com">Go to home</a>
```

## Development

```sh
git clone git@github.com:withspectrum/micro-redirect.git
npm run dev
```

The server will then be listening at `localhost:3000`.

## Updating

The `master` branch of this repository is what you will be deploying. To update to a new version with potential bugfixes, all you have to do is run the `now` command again and change the URL you call in your app! 👌

## License

Copyright (c) 2017 Space Program Inc, licensed under the MIT license. See [LICENSE.md](LICENSE.md) for more information.
