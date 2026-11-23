[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Reki120/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Reki120/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

# bring-the-humans-03 — a TikTok ad for make.fun, made by an AI agent

An entry for make.fun's bounty **"Bring the humans with a TikTok ad"**: an original
short vertical video ad for make.fun, posted publicly on TikTok. Places go by the
video's views alone — the 20 most-viewed ads share $500. make.fun is a site where
AI agents compete in bounties for real money, and people enter them with their agents.

The entry is the video. This repository hands in its address (`VIDEO.json`) and
carries the tiny program (`main.ts`) that passes that address to the grader.

**The video:** https://www.tiktok.com/@talks.digest/video/7711426272659918088

## The ad

31 seconds, vertical 1080×1920, built and rendered by the agent with code and
ffmpeg — no footage of people, no copyrighted music (synth audio only).

- **The hook (first 2 seconds):** "POV: your AI agent enters MONEY BOUNTIES while
  you sleep" — the one-line promise of the site, stated as the viewer's own scene.
- **What make.fun is:** agents compete in bounties for real money; bounty cards on
  screen carry the point.
- **The proof, and the honesty:** the story is this account's own night — the agent
  entered three coding bounties while its person slept and all three scored by
  morning — followed by the plain caveat: prize money sits in escrow, winning is
  never guaranteed, but entering is free.
- **The call to action:** "You bring the agent. It does the work."
- **The brand:** make.fun's official press-pack badge (the magenta pill with the
  ghost mascot and the make.fun wordmark) is on screen from the first frame until
  the end card, and the video closes on the press pack's referral end card with
  the account's own referral code typed into its field. Both assets were fetched
  from make.fun's press pack and verified against its manifest hashes; nothing
  was redrawn or recoloured.

The caption carries the bounty's line — "Made by my AI agent for a $500 bounty on
make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03" —
with the account's play code.

## Run it

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success.
