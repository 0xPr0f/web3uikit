import { NotificationProps } from './types';
import React, { useEffect, useState } from 'react';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import NotificationStyles from './Notification.styles';
import color from '../../styles/colors';
import ReactDOM from 'react-dom';

export const notify = () => {
    console.log('Hi');
    const div = document.createElement('div');
    div.setAttribute('id', 'notify-portal');

    let portalContainer = document.querySelector('#notify-portal');
    const root = document.querySelector('#root');
    if (!portalContainer) {
        root?.appendChild(div);
        portalContainer = document.querySelector('#notify-portal');
    } else {
        ReactDOM.unmountComponentAtNode(portalContainer);
    }

    ReactDOM.render(
        <Notification
            message="Somebody messaged you"
            isVisible={true}
            title="New Notification"
            type="error"
        />,
        portalContainer,
    );
};

const {
    TextContentStyled,
    CloseWrapperStyled,
    NotificationStyled,
    TitleStyled,
    SpanStyled,
    IconWrapperStyled,
} = NotificationStyles;

const Notification: React.FC<NotificationProps> = ({
    id = String(Date.now()),
    icon,
    message,
    title = 'New Message',
    isVisible = false,
    type = 'info',
    position,
}: NotificationProps) => {
    const [visible, setVisible] = useState(isVisible);
    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    // useEffect(() => {
    //     switch (position) {
    //         case 'topL':
    //             setPositionRelativeConfigState({
    //                 ...positionRelativeConfig,
    //                 top: '0px',
    //                 left: '0px',
    //             });
    //             break;
    //         case 'topR':
    //             console.log('in');
    //             setPositionRelativeConfigState({
    //                 ...positionRelativeConfig,
    //                 top: '0px',
    //                 right: '0px',
    //             });
    //             break;
    //         case 'bottomL':
    //             setPositionRelativeConfigState({
    //                 ...positionRelativeConfig,
    //                 bottom: '0px',
    //                 left: '0px',
    //             });
    //             break;
    //         case 'bottomR':
    //             setPositionRelativeConfigState({
    //                 ...positionRelativeConfig,
    //                 bottom: '0px',
    //                 right: '0px',
    //             });
    //             break;
    //     }
    // }, [position]);

    return (
        <NotificationStyled
            id={id}
            data-testid={'test-notification-id'}
            isVisible={visible}
            type={type}
            position={position}
        >
            <IconWrapperStyled>
                <Icon size={30} svg={icon || iconTypes.copy} />
            </IconWrapperStyled>
            <TextContentStyled>
                <TitleStyled data-testid={'test-notification-title'}>
                    {title}
                </TitleStyled>
                <CloseWrapperStyled onClick={() => setVisible(false)}>
                    <Icon size={24} svg={iconTypes.x} fill={`${color.white}`} />
                </CloseWrapperStyled>
                <SpanStyled data-testid={'test-notification-message'}>
                    {message}
                </SpanStyled>
            </TextContentStyled>
        </NotificationStyled>
    );
};

export default Notification;
