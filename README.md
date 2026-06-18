# College Football — Landing Site

A single-page promo site for the **College Football (Road to Glory)** Roblox game,
in the style of polished game hub pages like practicalgames.dev.

```
website/
├─ index.html      ← the page (structure + content)
├─ styles.css      ← all styling / theme
├─ script.js       ← nav, scroll animations, stat counters, LINK CONFIG
├─ assets/         ← put logo.png + screenshots here
└─ README.md       ← this file
```

## 1. Add your details (2 minutes)

Open **`script.js`** and edit the `CONFIG` block at the very top:

```js
const CONFIG = {
  roblox:  "https://www.roblox.com/games/YOUR_PLACE_ID/College-Football",
  discord: "https://discord.gg/YOUR_INVITE",
  group:   "https://www.roblox.com/communities/YOUR_GROUP_ID",
};
```

Every "Play Now", "Discord", and "Group" button across the page reads from here.

- **Logo:** drop your image at `assets/logo.png` (see `assets/README.md`).
- **Stats:** the numbers (visits, players, favorites, members) live on the
  `data-count` attributes in `index.html` — update them to your real figures.
- **Screenshots:** swap the placeholder tiles in the Screenshots section for your captures.

## 2. Preview it locally

Just open `index.html` in a browser — or run a tiny local server (better, so
fonts/relative paths behave exactly like production):

```bash
# from the website/ folder
python -m http.server 5500
# then visit http://localhost:5500
```

## 3. Put it online (free)

It's plain static HTML/CSS/JS, so any static host works. Easiest options:

- **Netlify / Vercel:** drag the `website` folder onto their dashboard — done.
- **GitHub Pages:** push this folder to a repo, enable Pages on the branch.
- **Cloudflare Pages:** connect the repo, no build command, output dir = `/`.

A custom domain (e.g. `collegefootball.gg`) can be pointed at any of these.

---

*Not affiliated with or endorsed by Roblox Corporation.*
