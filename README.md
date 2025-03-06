# CriticMarkup Obsidian test plugin
## TODO
- [ ] Add sidebar to approve / deny suggestions
- [ ] Remove sample plugin code
- [ ] Make it work in Reading View
---
View CriticMarkup syntax in Obsidian.!
* Run `chmod +x copy-to-obsidian.sh` to enable the copy script
* Set your obsidian vault path in .env for `bun run build` to copy the files over

![CleanShot 2025-03-06 at 11 16 32@2x](https://github.com/user-attachments/assets/f022d32f-2188-4544-adaa-236b0a68b156)
![CleanShot 2025-03-06 at 11 14 02@2x](https://github.com/user-attachments/assets/08ef3305-42c3-455c-90b5-54632f818557)

## Features

- Visual highlighting for CriticMarkup syntax:
  - Additions: `{++text++}`
  - Deletions: `{--text--}`
  - Comments: `{>>text<<}`
  - Highlights: `{==text==}`
  - Substitutions: `{~~old text~>new text~~}`


## Development

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set your Obsidian vault path in `.env`:
   ```
   OBSIDIAN_VAULT_PATH=/path/to/your/vault
   ```
4. Make the copy file script executable: `chmod +x copy-to-obsidian.sh`
5. Build the plugin:
   ```bash
   bun run build
   ```

## License

MIT License - see LICENSE file for details


