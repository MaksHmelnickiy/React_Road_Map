import { forgotPasswordTheme } from './ForgotPassword/theme';
import { signInTheme } from './SignIn/theme';

export const authenticationTheme = {
  container: {
    borderRadius: '10px',
    borderWidth: '0px',
    borderColor: 'palette.transparent',
    header: 'palette.surface.4',
    body: 'palette.surface.5',
  },
  signIn: signInTheme,
  forgotPassword: forgotPasswordTheme,
};
