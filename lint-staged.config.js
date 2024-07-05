module.exports = {
	"*.{js,jsx,ts,tsx}": ["pnpm run lint"],
	"**/*.ts?(x)": () => "npm run check-types",
	"*.json": ["pnpm run format"],
};
