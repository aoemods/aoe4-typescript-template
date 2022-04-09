# Age of Empires 4 TypeScript template
Enables creating Age of Empires 4 mods in TypeScript using [TypeScriptToLua](https://typescripttolua.github.io/).

Uses type definitions from the [@aoemods/aoetypes](https://github.com/aoemods/aoetypes) npm package (types also viewable online [here](https://aoemods.github.io/aoetypes-docs/)).

Join the [AoE 4 Modding Discord server](https://discord.gg/h8FX9Uq3vG) if you experience any issues or have questions.

## Usage
0. (Optional) Create an AOE4 mod with the modding tools 
1. Clone this repository, then run `npm install` as with any npm project
2. Copy or rename the `.env.example` file to `.env` file and set its output path to where you want the generated script to be.
3. (Optional) Create a new win condition in your AOE4 mod
4. Set your win condition's script path to the generated script path (same path as in `.env`)
5. Run `npm run dev` which will detect your script changes in `scripts/` and automatically transpile and copy the generated script over

Now you can open the project in the Age of Empires 4 editor as you would normally while being able to edit the TypeScript scripts.

## Commands
- `npm run dev`: Automatically transpiles and copies your scripts whenever you change them
- `npm start`: Transpiles and copies your scripts once

## If types are broken
Since TypeScript support is still experimental you will likely experience incorrect types.
To fix them yourself you can create a type definition file (eg. `types.d.ts` in `scripts/`) and create your own type definitions in it. 
These will automatically get picked up.
Check the [existing AoE4 types](https://github.com/aoemods/aoetypes/blob/master/packages/aoetypes/types/aoetypes.d.ts) or
[the official documentation](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html) for more information
about how to create type definitions.
