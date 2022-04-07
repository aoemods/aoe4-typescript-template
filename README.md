# Age of Empires 4 TypeScript template
Enables creating Age of Empires 4 mods in TypeScript using [TypeScriptToLua](https://typescripttolua.github.io/).

Uses type definitions from the [@aoemods/aoetypes](https://github.com/aoemods/aoetypes) npm package (types also viewable online [here](https://aoemods.github.io/aoetypes-docs/)).

## Usage
Clone this repository, then run `npm install` as with any npm project.

Edit your scripts in the `scripts/` directory. Use the commands below to convert your scripts to Lua and copy them over to your mod.

- `npm run build`: Generates a single Lua script `scar/main.lua` from your TypeScript files
- `npm run dev`: Automatically builds your scripts like build whenever your scripts change, but faster because it is incremental
- `npm run deploy <out-file>`: Copies the Lua file to the project directory and does some required post-processing, `<out-file>` is eg. `C:\Users\username\Documents\projectname\assets\scar\main.scar`