import fs from "fs";
import path from "path";

import connectMongo from "../../../config/mongo";
import logger from "../../../config/logger";
import Profile from "../../../models/Profile";
import loadProfiles from "../../../services/profiles/loadProfiles";

async function handler() {
  await connectMongo();

  let profiles = [];
  try {
    profiles = await Profile.aggregate([
      { $sample: { size: 5 } },
      { $match: { username: { $nin: process.env.SHADOWBAN.split(",") } } },
    ]);
  } catch (e) {
    logger.error(e, "failed to load profiles");
  }

  if (profiles.length === 0) {
    return res.status(404).json([]);
  }

  const fullRandomProfiles = await loadProfiles(profiles);

  return fullRandomProfiles;
}

export const getRandom = ()=>{
    return handler();
}