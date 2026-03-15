import {Component} from "react";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import Tooltip from "@mui/material/Tooltip";

export class RefreshButton extends Component {
    refreshPage() {
        window.location.reload();
    }
    render() {
        return (
            <Tooltip title="Refresh the page">
                <IconButton onClick={this.refreshPage}>
                    <RefreshIcon>

                    </RefreshIcon>
                </IconButton>
            </Tooltip>
        )
    }
}