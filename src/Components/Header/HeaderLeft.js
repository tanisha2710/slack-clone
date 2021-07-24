import React from 'react'
import { PersonaSize, Persona } from '@fluentui/react/lib/Persona';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Icon } from '@fluentui/react/lib/Icon';
import "./Header.css";
initializeIcons();

function HeaderLeft() {
    return (
        <div className="headerLeft">
            <Persona
                className="avatar"
                imageUrl=""
                text=""
                imageShouldStartVisible={true}
                size={PersonaSize.size40}
                showInitialsUntilImageLoads={true} 
            /> 
            <Icon className="iconStyle" iconName="BufferTimeBefore" />
        </div>
    )
}

export default HeaderLeft
