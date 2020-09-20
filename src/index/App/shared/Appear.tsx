import React, { ComponentPropsWithoutRef, FC } from 'react';
import { Appear as ShitAppear } from 'spectacle';
type ShitProps = ComponentPropsWithoutRef<typeof ShitAppear>;
export interface AppearProps
    extends Partial<Omit<ShitProps, 'elementNum'>>,
        Pick<ShitProps, 'elementNum'> {}
export type AppearType = FC<AppearProps>;

const transitionObj = {
    to: { opacity: 1 },
    from: { opacity: 0 },
};

export const Appear: AppearType = ({ children, ...shitAppearProps }) => {
    return (
        <ShitAppear transitionEffect={transitionObj} {...shitAppearProps}>
            {children}
        </ShitAppear>
    );
};
