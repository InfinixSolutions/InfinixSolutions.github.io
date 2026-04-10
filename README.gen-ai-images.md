# Gen AI Project Images

This repo includes prompts and a generation script for project portfolio images.

## Files

- `config/projectImagePrompts.json` contains all 8 project prompts.
- `scripts/generate-project-images.js` calls the OpenAI Images API and saves outputs.

## Generate Images

1. Export your API key:

```bash
export OPENAI_API_KEY="YOUR_KEY"
```

2. Optional: choose image model:

```bash
export OPENAI_IMAGE_MODEL="gpt-image-1"
```

3. Run:

```bash
npm run generate:project-images
```

Generated files are written to:

- `public/assets/images/portfolio/portfolio-1.jpg`
- `public/assets/images/portfolio/portfolio-2.jpg`
- `public/assets/images/portfolio/portfolio-3.jpg`
- `public/assets/images/portfolio/portfolio-4.jpg`
- `public/assets/images/portfolio/portfolio-5.jpg`
- `public/assets/images/portfolio/portfolio-6.jpg`
- `public/assets/images/portfolio/portfolio-7.jpg`
- `public/assets/images/portfolio/portfolio-8.jpg`

If you want to regenerate with a different style, edit `styleGuide` and project prompts in `config/projectImagePrompts.json` and rerun.
