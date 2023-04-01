import React from 'react';
import { ComboboxItemGroup, ComboboxItem } from '../Combobox';

export interface NativeSelectOptionProps {
  data: ComboboxItemGroup | ComboboxItem;
}

function isGroup(input: ComboboxItemGroup | ComboboxItem): input is ComboboxItemGroup {
  return 'group' in input;
}

export function NativeSelectOption({ data }: NativeSelectOptionProps) {
  if (isGroup(data)) {
    const items = data.items.map((item) => <NativeSelectOption key={item.value} data={item} />);
    return <optgroup label={data.group}>{items}</optgroup>;
  }

  return (
    <option key={data.value} value={data.value}>
      {data.label}
    </option>
  );
}

NativeSelectOption.displayName = '@mantine/core/NativeSelectOption';
