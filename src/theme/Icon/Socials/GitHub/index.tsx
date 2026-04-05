import type {ReactNode, SVGProps, CSSProperties} from 'react';

import clsx from 'clsx';
import styles from './styles.module.css';
import { Icon } from '@iconify/react';

// SVG Source: https://svgl.app/
function GitHub(props: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <a
      href="https://github.com/facebook/docusaurus"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon="mdi:github" width="24" />
    </a>
  );
}
export default GitHub;
