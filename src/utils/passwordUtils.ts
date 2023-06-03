import bcrypt from "bcrypt";

const passwordHasher = async (password: string, saltRounds = 10) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return { salt, hashedPassword };
};

export default passwordHasher;
