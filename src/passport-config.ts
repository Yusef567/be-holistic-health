import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import db from "./connection";

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET not set");
}

const jwtOptions = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtStrategy = new Strategy(jwtOptions, async (payload, done) => {
  try {
    const queryResponse = await db.query(
      `SELECT * FROM users WHERE user_id = $1`,
      [payload.id]
    );
    const user = queryResponse.rows[0];
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (err) {
    done(err, false);
  }
});

passport.use(jwtStrategy);

export default passport;
