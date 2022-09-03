const desc1 = { name: "read", path: "./src" } as const;
console.log(await Deno.permissions.query(desc1));

const desc2 = { name: "write", path: "./src" } as const;
console.log(await Deno.permissions.query(desc2));

const desc3 = { name: "net", host: "127.0.0.1:8000" } as const;
console.log(await Deno.permissions.query(desc3));

const desc4 = { name: "hrtime" } as const;
console.log(await Deno.permissions.query(desc4));

const desc5 = { name: "read", path: "/foo" } as const;
const status5 = await Deno.permissions.request(desc5);
console.log(status5);

const desc6 = { name: "read", path: "/bar" } as const;
const status6 = await Deno.permissions.request(desc6);
console.log(status6);

const desc = { name: "read", path: "/foo/bar" } as const;
console.log(await Deno.permissions.revoke(desc));

const cliDesc = { name: "read", path: "/foo" } as const;
console.log(await Deno.permissions.revoke(cliDesc));
