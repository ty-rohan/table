import React from "react";
import { Menu, MenuItem, ProSidebar, SidebarContent } from "react-pro-sidebar";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const Sidebar = () => {
  return (
    <div>
      <ProSidebar>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<DashboardOutlinedIcon />}></MenuItem>
            <MenuItem icon={<PeopleAltOutlinedIcon />}></MenuItem>
            <MenuItem icon={<ManageAccountsIcon />}></MenuItem>
            <MenuItem icon={<CategoryOutlinedIcon />}></MenuItem>
            <MenuItem icon={<GroupsOutlinedIcon />}></MenuItem>
            <MenuItem icon={<ContactSupportOutlinedIcon />}></MenuItem>
            <MenuItem icon={<SupportAgentOutlinedIcon />}></MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
