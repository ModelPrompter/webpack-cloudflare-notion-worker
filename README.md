Custom Notion theme for EverestWonder.com

# Install

- Install [Cloudflare wrangler](https://workers.cloudflare.com/): `npm install -g @cloudflare/wrangler`
- Login: `wrangler login`
- Setup a web worker for your Notion through https://fruitionsite.com/

# Setup
- Update steps 1-3 at the top of `/js/fruition.js` (@todo use a config file)
- Update `/wrangler.toml` with:

```bash
name        # The name of your cloudflare site
account_id  # Your cloudflare account ID
```

# Publish

`wrangler publish`

---

# Notes
This repository started as a template for kick starting a Cloudflare worker project.

[`index.js`](https://github.com/cloudflare/worker-template/blob/master/index.js) is the content of the Workers script.
