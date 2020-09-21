import { ComponentPropsWithoutRef, FC } from 'react';
import { Appear as ShitAppear } from 'spectacle';
type ShitProps = ComponentPropsWithoutRef<typeof ShitAppear>;
export interface AppearProps
    extends Partial<Omit<ShitProps, 'elementNum'>>,
        Pick<ShitProps, 'elementNum'> {}
export type AppearType = FC<AppearProps>;

export const Appear: AppearType = ShitAppear as any;
