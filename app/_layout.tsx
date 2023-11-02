import { Slot } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Providers } from './providers';

export default function RootLayout(): React.ReactNode {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <Providers>
      <View style={styles.container}>
        <View style={styles.header}>
          {!isHomePage ? (
            <Pressable
              style={styles.homeBtn}
              onPress={() => router.push('/')}
            />
          ) : null}
        </View>
        <View style={styles.main}>
          <Slot />
        </View>
        <View style={styles.footer}>
          <Text style={styles.version}>version 0.1.0</Text>
        </View>
      </View>
    </Providers>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#9B79FE',
    alignItems: 'center',
    overflow: 'hidden',
    color: '#000',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
    height: '8%',
  },
  homeBtn: {
    width: 20,
    height: 20,
    backgroundColor: 'black',
  },
  main: {
    flex: 1,
    width: '100%',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '5%',
  },
  version: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    color: '#c3c3c3',
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: '400',
  },
});
