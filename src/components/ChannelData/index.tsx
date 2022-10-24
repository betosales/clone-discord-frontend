import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention }  from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';


const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return <Container>
        <Messages>
            {Array.from(Array(15).keys()).map((n) => (
                <ChannelMessage
                key={n} 
                author='Author Teste' 
                date='23/10/2022' 
                content="Hoje é meu aniversário"
                isBot={n == 10}/>
            ))}
            
            <ChannelMessage 
                author='Author Teste' 
                date='23/10/2022' 
                content={<>
                    <Mention>@Testando</Mention>, me carrega no ...
                </>
            } 
                hasMention
                isBot
            />
        </Messages>
        <InputWrapper>
            <Input type="text" placeholder='Conversar em #chat-livre' />
            <InputIcon />
        </InputWrapper>
    </Container>;
}

export default ChannelData;