import {Component, type ReactNode} from "react";
interface TitleTextProps {
    children: ReactNode;
    subtitle?: string;
}

export class TitleText extends Component<TitleTextProps> {
    render() {
        if (!this.props.subtitle) {
            return (
                <h1 className="text-2xl font-bold text-white text-center select-none">
                    {this.props.children}
                </h1>
            );
        }
        return (
            <div className="flex flex-col flex-1">
                <h1 className="text-2xl font-bold text-white text-center select-none">
                    {this.props.children}
                </h1>
                <h2 className="text-sm text-white text-center select-none">{this.props.subtitle}</h2>
            </div>
        );
    }
}