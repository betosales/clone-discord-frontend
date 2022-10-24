import React from 'react';
import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return <Container>
        <Category>
            <span>Canais de texto</span>
            <AddCategoryIcon />
        </Category>
        <ChannelButton channelName="chat-livre" />
        <ChannelButton channelName="trabalho" />
        <ChannelButton channelName="game 1" />
        <ChannelButton channelName="game 2" />
        <ChannelButton channelName="game 3" />
        <ChannelButton channelName="game 4" />
    </Container>;
}

export default ChannelList;