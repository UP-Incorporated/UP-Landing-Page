import React, {Component} from "react";
import {Menu, MenuItem, IconButton, ListItemIcon, ListItemText} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from "@mui/icons-material/Home"

interface State {
    anchorEl: HTMLElement | null;
}


export class AppBarMenu extends Component<object, State> {
    state: State = {
        anchorEl: null,
    };
    menuId = `menu-${Math.random().toString(36).slice(2, 11)}`;
    // anchorEl being truthy replaces the need for a separate 'open' boolean
    handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <>
                {/* Left Section: Menu Toggle */}
                <div className="flex-none">
                    <IconButton
                        onClick={this.handleClick}
                        size="large"
                        className="text-white"
                        aria-controls={open ? this.menuId : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
                {/* Menu Component (Renders outside the flow) */}
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                    id={this.menuId}
                >
                    <MenuItem onClick={this.handleClose}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText>Homepage</ListItemText>
                    </MenuItem>
                </Menu>
            </>
        )
    }
}