
# FramerSync Design System

This is the central source of truth for all FramerSync UI styles, tokens, and variables.
It uses **Design Tokens** (JSON format) to sync between Figma and Code.

## 📂 Structure

- `tokens/global.json` → Primitive values (Color palette, Spacing scale, Fonts)
- `tokens/light.json` → **Light Mode** semantic mappings (e.g. `bg-surface` = `white`)
- `tokens/dark.json` → **Dark Mode** semantic mappings (e.g. `bg-surface` = `slate-900`)

## 🛠️ Build

We use [Style Dictionary](https://amzn.github.io/style-dictionary/) to transform JSON tokens into CSS variables.

```bash
npm install
npm run build
```

**Output:**
- `build/css/variables.css` (Base Light Mode variables)
- `build/css/variables-dark.css` (Dark Mode overrides)

## 🔗 How to Connect

### 1. Push to GitHub
Create a new repository on GitHub called `framersync-design-system`.
Then run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/framersync-design-system.git
git branch -M main
git push -u origin main
```

### 2. Connect Figma (Tokens Studio)
1. Open Figma file.
2. Install **Tokens Studio for Figma (Figma Tokens)** plugin.
3. Go to **Settings > URL / GitHub**.
4. Choose **GitHub**.
5. Connect your repository.
6. Set file path to `tokens/global.json`, `tokens/light.json`, etc.

Now, whenever you update colors in Figma and push via the plugin, this repository will update automatically!

### 3. Use in Web App
In your main web app (`framer-sync-ui`), install this repo:

```bash
npm install git+https://github.com/YOUR_USERNAME/framersync-design-system.git
```

Import the styles in `index.js` or `App.jsx`:

```javascript
import 'framersync-design-system/build/css/variables.css';
import 'framersync-design-system/build/css/variables-dark.css';
```
