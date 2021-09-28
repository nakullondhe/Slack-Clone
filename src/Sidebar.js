import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import SidebarOptions from "./SidebarOptions";
import db from "./firebase";
import { useProvider } from "./Provider/Provider";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useProvider();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <Create />
      </div>
      <hr />
      <SidebarOptions Icon={InsertComment} title="Threads" />
      <SidebarOptions Icon={Inbox} title="Mentions & reactions" />
      <SidebarOptions Icon={Drafts} title="Saved Items" />
      <SidebarOptions Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOptions Icon={PeopleAlt} title="People & user groups" />
      <SidebarOptions Icon={Apps} title="Apps" />
      <SidebarOptions Icon={FileCopy} title="File browser" />
      <SidebarOptions Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOptions Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOptions Icon={Add} addChannelOption title="Add Channels" />

      {channels && channels.map(channel => (
        <SidebarOptions key={channel.id} title={channel.name} id={channel.id} />
      ) )}

    </div>
  );
}

export default Sidebar;
