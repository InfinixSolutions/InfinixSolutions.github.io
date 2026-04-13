import base64
import json
import os
import subprocess
import sys
import urllib.request
from pathlib import Path

API_URL = "https://api.openai.com/v1/images/generations"
ROOT = Path(__file__).resolve().parents[1]
PORTFOLIO_DIR = ROOT / "public" / "assets" / "images" / "portfolio"
GENERATED_DIR = PORTFOLIO_DIR / "generated"

PROMPTS = {
    1: "Create a premium editorial-style technology illustration for a B2B data engineering portfolio project. Show enterprise student data pipelines flowing across academic systems into analytics dashboards, secure ETL nodes, SQL transformations, monitoring panels, and trusted reporting layers. Cinematic, high-trust, deep navy, teal, graphite, soft amber accents, no people, no cheesy robots, clean composition, subtle glassmorphism, suitable for a homepage portfolio card background.",
    2: "Create a premium enterprise systems integration illustration for a portfolio project about LMS enrollment synchronization. Show connected APIs, course records, term sync workflows, educational operations dashboards, and structured automation pipelines. Sophisticated B2B visual language, deep navy and teal palette, sharp layered UI panels, clean composition, no stock-photo people, suitable for a homepage portfolio card background.",
    3: "Create a premium AI automation illustration for a portfolio project about content generation and publishing workflows. Show intelligent workflow orchestration, content cards, review queues, approval states, scheduling panels, and connected publishing channels. Elegant enterprise design, dark graphite, navy, teal, and amber accents, modern editorial look, no people, no cheesy robots, suitable for a homepage portfolio card background.",
    4: "Create a premium e-commerce growth systems illustration for a portfolio project about Shopify to Meta Ads optimization. Show product feeds, campaign dashboards, performance charts, conversion tracking nodes, and automated catalog optimization interfaces. Strategic, polished, B2B-focused, deep navy, teal, graphite, subtle gold accents, clean layout, suitable for a homepage portfolio card background.",
    5: "Create a premium data architecture illustration for a portfolio project about product normalization in MongoDB. Show incoming messy product records transforming into structured schemas, taxonomy systems, clean database layers, and downstream analytics or AI-ready outputs. Sophisticated enterprise style, dark navy and slate palette, teal highlights, clean composition, suitable for a homepage portfolio card background.",
    6: "Create a premium workflow automation illustration for a portfolio project about Telegram approval systems. Show messaging-inspired approval flows, status transitions, media review cards, human-in-the-loop checkpoints, and automation routing between systems. High-trust business visual style, deep navy, teal, graphite, amber accents, no people, clean composition, suitable for a homepage portfolio card background.",
    7: "Create a premium financial data engineering illustration for a portfolio project about SQL-based student financial aggregation. Show reconciled transaction streams, summary tables, secure finance dashboards, balance tracking panels, and data completeness controls. Elegant enterprise-grade composition, dark blue, graphite, teal, subtle amber, suitable for a homepage portfolio card background.",
    8: "Create a premium AI media pipeline illustration for a portfolio project about automated short-form media creation. Show connected modules for video generation, voice synthesis, image enhancement, editing timelines, publishing outputs, and orchestration dashboards. Refined B2B innovation style, cinematic lighting, deep navy, graphite, teal, amber highlights, no people, suitable for a homepage portfolio card background.",
}


def generate_image(api_key: str, prompt: str) -> bytes:
    payload = json.dumps(
        {
            "model": "gpt-image-1",
            "size": "1024x1536",
            "output_format": "png",
            "prompt": prompt,
        }
    ).encode("utf-8")
    request = urllib.request.Request(
        API_URL,
        data=payload,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=300) as response:
        data = json.load(response)
    return base64.b64decode(data["data"][0]["b64_json"])


def convert_to_jpg(png_path: Path, jpg_path: Path) -> None:
    subprocess.run(
        ["sips", "-s", "format", "jpeg", str(png_path), "--out", str(jpg_path)],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )


def main() -> int:
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        print("OPENAI_API_KEY is not set", file=sys.stderr)
        return 1

    GENERATED_DIR.mkdir(parents=True, exist_ok=True)

    for idx, prompt in PROMPTS.items():
        print(f"Generating image {idx}/8...", flush=True)
        png_path = GENERATED_DIR / f"homepage-portfolio-{idx:02d}.png"
        jpg_path = PORTFOLIO_DIR / f"portfolio-{idx}.jpg"
        image_bytes = generate_image(api_key, prompt)
        png_path.write_bytes(image_bytes)
        convert_to_jpg(png_path, jpg_path)

    print("Done")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
