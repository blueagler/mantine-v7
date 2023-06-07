import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { Spotlight } from './Spotlight';

export default { title: 'Spotlight' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Spotlight>
        <Spotlight.Search
          placeholder="Search something..."
          leftSection={<IconSearch stroke={1.5} size={20} />}
        />
        <Spotlight.ActionsList>
          <Spotlight.Empty>No results</Spotlight.Empty>
          <Spotlight.Action>First</Spotlight.Action>
          <Spotlight.Action>Second</Spotlight.Action>
          <Spotlight.Action id="third">Third</Spotlight.Action>
        </Spotlight.ActionsList>
      </Spotlight>

      <Button onClick={() => Spotlight.open()}>Open spotlight</Button>
    </div>
  );
}