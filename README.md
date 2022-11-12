# A Cloudflare web worker for embedding customized Notions
- Uses webpack with live previewing
- Hides banner, icon, and title and removes padding
- Add custom styles

# Install

- Install [Cloudflare wrangler](https://workers.cloudflare.com/): `npm -g install wrangler@latest`
- Login: `wrangler login`
- Setup a web worker for your Notion through https://fruitionsite.com/

# Setup
- Update steps 1-3 at the top of `/src/fruition.js` (@todo use a config file)
- Update `/wrangler.toml` with:

```bash
name        # The name of your cloudflare site
account_id  # Your cloudflare account ID
```

# Dev

Develop the Notion script through the wrangler with live reload with `npm start`

# Publish

`npm run publish`

---

# Notes
This repository started as a template for kick starting a Cloudflare worker project.

[`index.js`](https://github.com/cloudflare/worker-template/blob/master/index.js) is the content of the Workers script.

# Troubleshooting
### Installing
- This requires the latest version of wrangler, which uses a different dependency (`@cloudflare/wrangler` vs `wrangler`). You may need to remove the older version or create an alias if you get errors during build
- If you get `gcc: command not found` (happened for me on Ubuntu) install it with: `sudo apt-get install gcc`