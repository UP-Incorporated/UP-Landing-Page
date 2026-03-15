import React, { Component } from "react";
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { Menu as MenuIcon, Home as HomeIcon } from "@mui/icons-material";
import { RefreshButton } from "./RefreshButton.tsx";

interface State {
    anchorEl: HTMLElement | null;
}

export class AppBarContents extends Component<object, State> {
    state: State = {
        anchorEl: null,
    };

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
            /* Main Container: Flex row that stretches across the top */
            <div className="flex flex-row items-center justify-between w-full h-16 px-4 ">

                {/* Left Section: Menu Toggle */}
                <div className="flex-none">
                    <IconButton
                        onClick={this.handleClick}
                        size="large"
                        className="text-white"
                    >
                        <MenuIcon />
                    </IconButton>
                </div>

                {/* Center Section: Branding */}
                <h1 className="text-2xl font-bold text-white text-center select-none">
                    UP Inc.
                </h1>

                {/* Right Section: Actions */}
                <div className="flex-none">
                    <RefreshButton />
                </div>

                {/* Menu Component (Renders outside the flow) */}
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                >
                    <MenuItem onClick={this.handleClose}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText>Homepage</ListItemText>
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}