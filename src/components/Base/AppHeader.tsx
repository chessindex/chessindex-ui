import { Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import classes from './AppHeader.module.css';

const links = [
//   { link: '/', label: 'Home' },
//   { link: '/games', label: 'Games' },
  { link: '/', label: 'Games' },
  { link: '/players', label: 'Players' },
  { link: '/tournaments', label: 'Tournaments' },
];

export default function AppHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={location.pathname === link.link || undefined}
    >
      {link.label}
    </Link>
  ));

  return (
      <Container size="xl" className={classes.inner}>
        <div>Chess Registry</div>
        <div className={classes.links}>
          {items}
        </div>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
  );
}