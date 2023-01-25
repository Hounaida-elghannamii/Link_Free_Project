import findAllBasic from "../../../services/profiles/findAllBasic";
import hydrateWithStats from "../../../services/profiles/hydrateWithStats";

export default async function handler() {
  const profiles = findAllBasic();
  const profilesWithStats = await hydrateWithStats(profiles);

  return profilesWithStats;
}


export const getSearch = ()=>{
    return handler();
}