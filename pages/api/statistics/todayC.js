import connectMongo from "../../../config/mongo";
import logger from "../../../config/logger";

import Stats from "../../../models/Stats";

export default async function handler() {
  await connectMongo();
  const date = new Date();
  date.setHours(1, 0, 0, 0);

  let statsToday;
  try {
    statsToday = await Stats.findOne({
      date,
    });
  } catch (e) {
    logger.error(e, "failed to load stats");
  }

  if (!statsToday) {
    statsToday = {
      views: 0,
      clicks: 0,
      users: 0,
    };
  }

  return {
    views: statsToday.views || 0,
    clicks: statsToday.clicks || 0,
    users: statsToday.users || 0,
  };
}

export const getTodayStatic = ()=>{
    return handler();
}