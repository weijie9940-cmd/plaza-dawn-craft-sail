# PandaScore free-tier intake

The user has a PandaScore free-tier API token. Build a read-only intake first, without publishing unverified tournament champions to the map.

1. Add a server-side PandaScore client for a bounded page of past Counter-Strike S-tier tournaments. Authenticate only with a Bearer header from `PANDASCORE_API_TOKEN`; never send a token to the browser, output, or logs.
2. Turn API objects into a small review report with stable IDs, names, dates, source URLs, and explicit missing verification items. Do not infer Major status or tournament champions from match winners.
3. Add fixture-based tests for mapping and failed/unauthorized transport; keep the existing snapshot unchanged.
4. Document secure configuration and the next manual review gate. Run tests, typecheck, build, and browser render checks.
