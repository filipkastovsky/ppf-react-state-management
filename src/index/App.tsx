import React, { FC } from 'react';
import { Deck, Slide } from 'spectacle';

import {
    createAtlanticProvider,
    theme as atlanticTheme,
    ThemeType,
} from '@atlasgroup/react-atlantic';
import { Landing } from './App/Landing';
import { WhoAmI } from './App/WhoAmI';
import { About } from './App/About';
import { Flashback } from './App/Flashback';
import { Class } from './App/Class';
import { LetsGoogle } from './App/LetsGoogle';
import { Redux } from './App/Redux';
import { ReduxIntro } from './App/ReduxIntro';
import { Middleware } from './App/Middleware';
import { Mobx } from './App/Mobx';
import { MobxIntro } from './App/MobxIntro';
import { MutableState } from './App/MutableState';
import { LoginForm } from './App/LoginForm';
import { Hooks } from './App/Hooks';
import { Shit } from './App/Shit';
import { SoHowDoYouManageState } from './App/SoHowDoYouManageState';
import { Memo } from './App/Memo';
import { CtxSplitting } from './App/CtxSplitting';

export interface AppProps {}
export type AppType = FC<AppProps>;

enum Colors {
    Green = '#29df2c',
    Blue = '#61DAFB',
    White = '#FFFFFF',
    Black = '#000000',
}

const theme: ThemeType = {
    ...atlanticTheme,
    color: {
        ...atlanticTheme.color,
        primary: {
            ...atlanticTheme.color.primary,
            alpha: Colors.Green,
            beta: Colors.Blue,
            gamma: Colors.White,
        },
        text: {
            ...atlanticTheme.color.text,
            alpha: Colors.White,
            beta: Colors.Green,
            gamma: Colors.Blue,
        },
        background: {
            ...atlanticTheme.color.background,
            alpha: Colors.Black,
        },
    },
    font: {
        ...atlanticTheme.font,
        family: "'Roboto Mono',monospace",
    },
};

const backgroundColor = theme.color.background.alpha;

const AtlanticProvider = createAtlanticProvider<undefined>();
export const App: AppType = () => {
    return (
        <AtlanticProvider theme={theme}>
            <Deck backgroundColor={backgroundColor} animationsWhenGoingBack>
                <Slide backgroundColor={backgroundColor}>{Landing}</Slide>
                <Slide backgroundColor={backgroundColor}>{WhoAmI}</Slide>
                <Slide backgroundColor={backgroundColor}>{About}</Slide>
                <Slide backgroundColor={backgroundColor}>{Flashback}</Slide>
                <Slide backgroundColor={backgroundColor}>{Class}</Slide>
                <Slide backgroundColor={backgroundColor}>{LetsGoogle}</Slide>
                <Slide backgroundColor={backgroundColor}>{ReduxIntro}</Slide>
                <Slide backgroundColor={backgroundColor}>{Redux}</Slide>
                <Slide backgroundColor={backgroundColor}>{Middleware}</Slide>
                <Slide backgroundColor={backgroundColor}>{LoginForm}</Slide>
                <Slide backgroundColor={backgroundColor}>{Mobx}</Slide>
                <Slide backgroundColor={backgroundColor}>{MobxIntro}</Slide>
                <Slide backgroundColor={backgroundColor}>{MutableState}</Slide>
                <Slide backgroundColor={backgroundColor}>{Hooks}</Slide>
                <Slide backgroundColor={backgroundColor}>{Shit}</Slide>
                <Slide backgroundColor={backgroundColor}>
                    {SoHowDoYouManageState}
                </Slide>
                <Slide backgroundColor={backgroundColor}>{Memo}</Slide>
                <Slide backgroundColor={backgroundColor}>{CtxSplitting}</Slide>
            </Deck>
        </AtlanticProvider>
    );
};
