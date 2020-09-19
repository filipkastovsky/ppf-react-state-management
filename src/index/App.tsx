import React, { FC } from 'react';
import { Deck, Slide } from 'spectacle';

export interface AppProps {}
export type AppType = FC<AppProps>;

export const App: AppType = () => {
    return (
        <Deck animationsWhenGoingBack>
            <Slide>
                <div>prdel</div>
            </Slide>
        </Deck>
    );
};
