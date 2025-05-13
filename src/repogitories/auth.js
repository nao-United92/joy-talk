import { supabase } from '../lib/supabase';

export const authRepository = {
  async signup(name, email, password) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (error != null) throw new Error(error.message);
    return {
      ...data.user,
      username: data.user.user_metadata.name,
    };
  },
};
