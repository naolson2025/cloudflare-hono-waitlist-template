# Local Dev
- copy the `.env.example` as `.env`
- install dependencies with `bun i`
- `bun run dev`

# Deploying to Cloudflare
- update the `wrangler.jsonc` with your env variables:
    - POLICY_AUD
    - CF_ACCESS_DOMAIN
- `bun run deploy:staging` or `bun run deploy:prod`