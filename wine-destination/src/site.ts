import florina from "../destinations/florina";

const all = {florina};
const id  = import.meta.env.SITE_ID as keyof typeof all;
if (!all[id]) throw new Error(`Set SITE_ID to one of: ${Object.keys(all).join(",")}`);

export const site = all[id];