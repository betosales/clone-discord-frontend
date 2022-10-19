import React from 'react';

import { Button } from './styles';

import Logo from '../../assets/logo.svg'

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

export const ServerButton: React.FC<Props> = ({
    selected, isHome, hasNotifications, mentions
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
            aria-label={`${mentions} menções`} 
        >
            {isHome && <img src={Logo} alt="Rocketseat" />}
        </Button>
    );
}