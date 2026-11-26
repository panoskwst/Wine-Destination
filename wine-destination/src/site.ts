import andros from "../destinations/andros";
import chalkida from "../destinations/chalkida";
import drama from "../destinations/drama";
import florina from "../destinations/florina";
import karditsa from "../destinations/karditsa";
import xanthi from "../destinations/xanthi";
import mesogeia from "../destinations/mesogeia";
import naAttiki from "../destinations/naAttiki";
import naousa from "../destinations/naousa";
import nemea from "../destinations/nemea";
import pella from "../destinations/pella";
import rhodes from "../destinations/rhodes";
import santorini from "../destinations/santorini";
import thessaloniki from "../destinations/thessaloniki";

const all = {andros, mesogeia, drama, chalkida, florina, karditsa, naAttiki, naousa, nemea, pella, rhodes, santorini, thessaloniki, xanthi};
const id  = import.meta.env.SITE_ID as keyof typeof all;
if (!all[id]) throw new Error(`Set SITE_ID to one of: ${Object.keys(all).join(",")}`);

export const site = all[id];