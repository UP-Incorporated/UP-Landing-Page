import { Component, type KeyboardEvent } from "react";
import Tooltip from "@mui/material/Tooltip";

export interface Props {
    title: string;
    className?: string;
}

export interface State {
    tooltip: string;
}

export class CopyableText extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            tooltip: "Click to copy!",
        };
    }

    // ✅ Arrow function, correct syntax
    copyText = async () => {
        try {
            await navigator.clipboard.writeText(this.props.title);
            this.setState({ tooltip: "Copied! ✓" });

            setTimeout(() => {
                this.setState({ tooltip: "Click to copy!" });
            }, 500);
        } catch {
            this.setState({ tooltip: "Failed to copy" });
            setTimeout(() => {
                this.setState({ tooltip: "Click to copy!" });
            }, 500);
        }
    };

    handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
            if (event.key === " ") {
                event.preventDefault();
            }
            this.copyText();
        }
    };

    render() {
        const css = "hover:text-orange-500 transition-colors duration-200 cursor-pointer " + (this.props.className ?? "");

        return (
            <Tooltip title={this.state.tooltip} arrow>
        <span
            className={css}
            onClick={this.copyText}
            onKeyDown={this.handleKeyDown}
            tabIndex={0}
            role="button"
        >
          {this.props.title}
        </span>
            </Tooltip>
        );
    }
}