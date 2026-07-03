"""Generate natural character voice audio for Bible Adventure World.

Reads the dialogue from characters.js and records every greeting and answer
as an MP3 in audio/ using Microsoft's free neural storytelling voices.
Run again any time the dialogue changes:  python3 gen_voices.py
"""
import asyncio
import json
import subprocess
import sys
from pathlib import Path

import edge_tts

ROOT = Path(__file__).parent
OUT = ROOT / "audio"
OUT.mkdir(exist_ok=True)

# Voice casting: natural neural voices + pitch/speed tuning per character
CAST = {
    "adam":   {"voice": "en-GB-RyanNeural",        "rate": "-5%",  "pitch": "-8Hz"},   # warm, fatherly
    "eve":    {"voice": "en-US-JennyNeural",       "rate": "-3%",  "pitch": "+8Hz"},   # gentle, kind
    "noah":   {"voice": "en-GB-ThomasNeural",      "rate": "-10%", "pitch": "-20Hz"},  # old sea captain
    "moses":  {"voice": "en-US-ChristopherNeural", "rate": "-6%",  "pitch": "-12Hz"},  # deep, authoritative
    "david":  {"voice": "en-US-SteffanNeural",     "rate": "+8%",  "pitch": "+20Hz"},  # young, energetic
    "elijah": {"voice": "en-IE-ConnorNeural",      "rate": "+4%",  "pitch": "-4Hz"},   # fiery Irish storyteller
    "daniel": {"voice": "en-ZA-LukeNeural",        "rate": "-2%",  "pitch": "+0Hz"},   # calm and steady
    "samuel": {"voice": "en-GB-MaisieNeural",      "rate": "+4%",  "pitch": "+0Hz"},   # real child voice
}


def load_characters():
    out = subprocess.check_output(
        ["node", "-e", 'console.log(JSON.stringify(require("./characters.js")))'],
        cwd=ROOT,
    )
    return json.loads(out)


async def render(text, path, cast):
    for attempt in range(3):
        try:
            tts = edge_tts.Communicate(text, cast["voice"], rate=cast["rate"], pitch=cast["pitch"])
            await tts.save(str(path))
            if path.stat().st_size > 1000:
                return True
        except Exception as e:
            print(f"    retry {attempt + 1}: {e}")
            await asyncio.sleep(2)
    return False


async def main():
    chars = load_characters()
    jobs = []
    for key, data in chars.items():
        jobs.append((key, "g", data["greeting"]))
        for i, item in enumerate(data["questions"]):
            jobs.append((key, str(i), item["a"]))

    print(f"Recording {len(jobs)} lines of dialogue...")
    failed = []
    for key, tag, text in jobs:
        path = OUT / f"{key}_{tag}.mp3"
        if path.exists() and path.stat().st_size > 1000:
            print(f"  skip {path.name} (already recorded)")
            continue
        ok = await render(text, path, CAST[key])
        print(f"  {'ok  ' if ok else 'FAIL'} {path.name}")
        if not ok:
            failed.append(path.name)

    if failed:
        print(f"\n{len(failed)} clips failed: {failed}")
        sys.exit(1)
    total_kb = sum(f.stat().st_size for f in OUT.glob("*.mp3")) // 1024
    print(f"\nDone! {len(list(OUT.glob('*.mp3')))} clips, {total_kb} KB total.")


asyncio.run(main())
