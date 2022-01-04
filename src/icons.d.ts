/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  export const IconAUp: Icon;
export const IconARight: Icon;
export const IconALeft: Icon;
export const IconADown: Icon;
export const IconShare: Icon;
export const CoinBtc: Icon;
export const CoinEth: Icon;
export const CoinUsdc: Icon;
export const CoinWbtc: Icon;
export const IconFaucet: Icon;
export const IconQuestion: Icon;
export const IconEdit: Icon;
export const IconArrowDown: Icon;
export const IconArrowUp: Icon;
export const IconArrowLeft: Icon;
export const IconArrowRight: Icon;
export const CoinToken1: Icon;
export const CoinToken0: Icon;
