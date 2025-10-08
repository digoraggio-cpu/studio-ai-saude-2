// Fix: Removed unused 'lazy' import from React.
import React, { Suspense } from 'react';
import type { LucideProps } from 'lucide-react';
// Fix: Changed `import * as icons` to `import { icons }`.
// The `* as icons` import pulls in all exports from `lucide-react`, including non-component helpers and types,
// which caused `icons[name]` to have an incorrect type that couldn't be used as a JSX component.
// The named export `{ icons }` specifically provides an object containing only the icon components, ensuring type safety.
import { icons } from 'lucide-react';

export interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    // Return a fallback or null if the icon name is invalid
    return null; 
  }

  return (
    <Suspense fallback={<div style={{ width: props.size || 24, height: props.size || 24 }} />}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default Icon;
