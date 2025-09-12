import { Outlet} from 'react-router-dom'

import { AppShell, Container, MantineProvider } from '@mantine/core';
import AppHeader from '../components/Base/AppHeader';

export default function Layout() {
  return (
    <MantineProvider>
      <AppShell
        padding="md"
        header={{ height: 56 }}
      >
        <AppShell.Header>
          <AppHeader />
        </AppShell.Header>

        <AppShell.Main>
          <Container size="xl">
            <Outlet />
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
    
  );
}