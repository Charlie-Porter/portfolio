import { signIn } from "./auth";

export const handleGitHubLogin = async () => {
  "use server";
  await signIn("github");
};
