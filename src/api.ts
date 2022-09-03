const res = await fetch(new URL("./config.json", import.meta.url));
const config = await res.json();
console.log(config);
