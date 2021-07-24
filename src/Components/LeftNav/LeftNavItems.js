import React from 'react'
import LeftNavItem from './LeftNavItem'
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from '../../firebase';

const Items = [
    { iconName:"CommentSolid", title:"Thread" },
    { iconName:"ReportDocument", title:"Mentions & Reactions" },
    { iconName:"Save", title:"Saved items" },
    { iconName:"Tablet", title:"Channel browser" },
    { iconName:"People", title:"People & User groups" },
    { iconName:"AllApps", title:"Apps" },
    { iconName:"FileTemplate", title:"FIle browser" },
    { iconName:"ChevronUp", title:"Show less" }
    
]

function LeftNavItems() {
    const [channels, loading, error] = useCollection(db.collection("rooms"));
    return (
        <>
            {
                Items.map(item =>
                    <LeftNavItem
                        iconName={item.iconName}
                        title={item.title}
                    />
                )
            }
            <hr />
            <LeftNavItem
                iconName="ChevronDown"
                title="Channels"
            />
            <hr />
            <LeftNavItem
                iconName="Add"
                title="Add Channel"
                addChannelOption
            />
            {channels?.docs.map((doc) =>
            <LeftNavItem
                title={doc.data().name}
                key={doc.id}
                id={doc.id}
            />
            )}
        </>
    )
}

export default LeftNavItems
