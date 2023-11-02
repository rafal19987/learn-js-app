import { ReduxProvider } from '../src/redux/provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};
