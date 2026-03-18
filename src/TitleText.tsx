import {Component, type ReactNode} from "react";
import Typography from '@mui/material/Typography';

export interface TitleTextProps {
    children: ReactNode;
    subtitle?: string;
}

const TITLE_CLASS = "text-2xl font-bold text-white text-center select-none";


export class TitleText extends Component<TitleTextProps> {
    render() {
        const TITLE = <h1 className={TITLE_CLASS}>
            {this.props.children}
        </h1>;
        if (!this.props.subtitle) {
            return (
                TITLE
            );
        }
        return (
            <div className="flex flex-col flex-1">
                {TITLE}
                <Typography variant="subtitle2" align="center" className="text-white select-none">
                    {this.props.subtitle}
                </Typography>
            </div>
        );
    }
}