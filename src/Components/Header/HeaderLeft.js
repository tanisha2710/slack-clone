import React from 'react'
import { PersonaSize, Persona } from '@fluentui/react/lib/Persona';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Icon } from '@fluentui/react/lib/Icon';
import "./Header.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
initializeIcons();

function HeaderLeft() {
    const [user] = useAuthState(auth);
    return (
        <div className="headerLeft">
            <Persona
                className="avatar"
                imageUrl={user?.photoURL}
                text=""
                imageShouldStartVisible={true}
                size={PersonaSize.size40}
                showInitialsUntilImageLoads={true} 
                onClick={() => auth.signOut()}
            /> 
            <Icon className="iconStyle" iconName="BufferTimeBefore" />
        </div>
    )
}

export default HeaderLeft
