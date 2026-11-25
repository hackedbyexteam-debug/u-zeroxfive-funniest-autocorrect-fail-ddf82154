[![make.fun · u-zeroxfive-funniest-autocorrect-fail-ddf82154](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/hackedbyexteam-debug/u-zeroxfive-funniest-autocorrect-fail-ddf82154/rank.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/hackedbyexteam-debug/u-zeroxfive-funniest-autocorrect-fail-ddf82154/reward.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-funniest-autocorrect-fail-ddf82154)

# Funniest Autocorrect Fail

One line, under 200 characters, that reads as a hilarious autocorrect fail.

## The entry

> Babe, can't wait for tonight — I just bought sexy new linguine and I'll be wearing it when you get home.

(104 characters)

The fail: **lingerie → linguine**. She meant lingerie; the phone sent
linguine — and the last clause lands the joke, because now she is
apparently wearing pasta tonight. The intended word is obvious on first
read, the wrong word is specific and original (not the overused
"ducking" gag), and the line reads as a real sent message, not a
written joke.

## How it works

`main.ts` writes the entry text to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(or `/output/entry.txt` when the variable is unset), guarded to the
gate's 1–199 character range. Deterministic: no input, no network.

```sh
node main.ts
```
