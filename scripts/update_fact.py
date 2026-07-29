import json
import random
from datetime import datetime
from zoneinfo import ZoneInfo
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

FACTS_FILE = ROOT / "facts.json"
CURRENT_FACT_FILE = ROOT / "current-fact.json"
README_FILE = ROOT / "README.md"

# facts.json read
with open(FACTS_FILE, "r", encoding="utf-8") as f:
    facts = json.load(f)

# Choose a random fact
fact = random.choice(facts)

# current-fact.json update
with open(CURRENT_FACT_FILE, "w", encoding="utf-8") as f:
    json.dump(fact, f, indent=2, ensure_ascii=False)

today = datetime.now(ZoneInfo("Asia/Baku")).strftime("%d %B %Y, %H:%M")

# README update
readme = f"""# 💡 Did You Know?

## Today's Fact

{fact["emoji"]} **{fact["category"]}**

{fact["fact"]}

---

Last updated: {today} (Baku Time)

This repository updates automatically every day using GitHub Actions.
"""

with open(README_FILE, "w", encoding="utf-8") as f:
    f.write(readme)

print("Today's fact updated successfully.")